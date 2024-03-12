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
                junit '**/Backend/Test/**/*.xml'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
