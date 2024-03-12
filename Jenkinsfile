pipeline {
    agent any

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
                    // Navigate to the Backend directory
                    dir('Backend') {
                        // Install dependencies
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Navigate to the Backend directory and run tests
                    dir('Backend') {
                        // Run tests and generate JUnit reports
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                // Publish JUnit test results
                // The path needs to be adjusted based on where your test reports are generated within the Backend directory
                junit '**/Backend/Test/**/*.xml'
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
