const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const tempDir = os.tmpdir();

// C 코드 실행 함수
function runCCode(code) {
    return new Promise((resolve, reject) => {
        const outputFilePath = path.join(tempDir, 'c_program.exe');
        const compiler = spawn('gcc', ['-o', outputFilePath, '-xc', '-']);
        
        compiler.stdin.write(code);
        compiler.stdin.end();

        compiler.on('close', (code) => {
            if (code === 0) {
                const c_program = spawn(outputFilePath);
                const result = [];

                c_program.stdout.on('data', (data) => {
                    result.push(data.toString());
                });

                c_program.on('close', () => {
                    resolve(result.join(''));
                });
            } else {
                reject('Compilation failed');
            }
        });

        compiler.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
}

// C++ 코드 실행 함수
function runCppCode(code) {
    return new Promise((resolve, reject) => {
        const outputFilePath = path.join(tempDir, 'cpp_program.exe');
        const compiler = spawn('g++', ['-o', outputFilePath, '-x', 'c++', '-']);
        
        compiler.stdin.write(code);
        compiler.stdin.end();

        compiler.on('close', (code) => {
            if (code === 0) {
                const cpp_program = spawn(outputFilePath);
                const result = [];

                cpp_program.stdout.on('data', (data) => {
                    result.push(data.toString());
                });

                cpp_program.on('close', () => {
                    resolve(result.join(''));
                });
            } else {
                reject('Compilation failed');
            }
        });

        compiler.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
}

// Java 코드 실행 함수
function runJavaCode(code) {
    return new Promise((resolve, reject) => {
        const javaFilePath = path.join(tempDir, 'Main.java');
        const outputDir = tempDir;

        require('fs').writeFileSync(javaFilePath, code);

        const compiler = spawn('javac', ['-d', outputDir, javaFilePath]);

        compiler.on('close', (code) => {
            if (code === 0) {
                const java_program = spawn('java', ['-classpath', outputDir, 'Main']);
                const result = [];

                java_program.stdout.on('data', (data) => {
                    result.push(data.toString());
                });

                java_program.on('close', () => {
                    resolve(result.join(''));
                });
            } else {
                reject('Compilation failed');
            }
        });

        compiler.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
}

// Python 코드 실행 함수
function runPythonCode(code) {
    return new Promise((resolve, reject) => {
        const python_program = spawn('python3', ['-c', code]);
        const result = [];

        python_program.stdout.on('data', (data) => {
            result.push(data.toString());
        });

        python_program.on('close', () => {
            resolve(result.join(''));
        });

        python_program.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
}

module.exports = {
    runCCode,
    runCppCode,
    runJavaCode,
    runPythonCode
};
