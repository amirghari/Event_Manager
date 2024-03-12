pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/amirghari/Event_Manager.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    dir('Backend') {
                        // Dynamically select the command based on the OS
                        if (isUnix()) {
                            sh 'npm install'
                        } else {
                            bat 'npm install'
                        }
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    dir('Backend') {
                        // Dynamically select the command based on the OS
                        if (isUnix()) {
                            sh 'npm test'
                        } else {
                            bat 'npm test'
                        }
                    }
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                // Adjust the path to the location of your Jest JUnit reports
                junit 'Backend/test-reports/*.xml'
            }
        }
    }
    
    post {
        always {
            // Cleans up the workspace after the build is done
            cleanWs()
        }
    }
}
