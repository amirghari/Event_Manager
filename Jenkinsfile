pipeline {
    agent any

    environment {
        // Define variables as needed
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials' // Use the ID of your Docker Hub credentials stored in Jenkins
        DOCKERHUB_REPO = 'amirghari/eventmanager' // Your Docker Hub repository
        DOCKER_IMAGE_TAG = 'latest' // Tag for the Docker image
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub repository
                git branch: 'main', url: 'https://github.com/amirghari/Event_Manager.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Use Node's Docker image to run npm install
                    docker.image('node:14').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Running tests using a Node Docker image
                    // Assuming tests are set up to generate JUnit reports
                    docker.image('node:14').inside {
                        // Command to run your tests and generate JUnit reports
                        // Adjust as necessary for your project's test command
                        sh 'npm test -- --reporters=jest-junit'
                    }
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                // Publish JUnit test results
                junit '**/Backend/Test/**/*.xml' // Adjust the path to where your JUnit test reports are saved
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build("${DOCKERHUB_REPO}:${DOCKER_IMAGE_TAG}")
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    // Login and push Docker image to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS_ID) {
                        docker.image("${DOCKERHUB_REPO}:${DOCKER_IMAGE_TAG}").push()
                    }
                }
            }
        }
    }
    
    post {
        always {
            // Cleanup after pipeline execution
            cleanWs()
        }
    }
}
