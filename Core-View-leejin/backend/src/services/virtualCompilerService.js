// src/services/virtualCompilerService.js

const { spawn } = require('child_process');

// C 코드 실행 함수
function runCCode(code) {
    return new Promise((resolve, reject) => {
        const compiler = spawn('gcc', ['-o', '/tmp/c_program', '-xc', '-']);
        const output = [];

        compiler.stdout.on('data', (data) => {
            output.push(data.toString());
        });

        compiler.stderr.on('data', (data) => {
            reject(data.toString());
        });

        compiler.on('close', (code) => {
            if (code === 0) {
                const c_program = spawn('/tmp/c_program');
                const result = [];

                c_program.stdout.on('data', (data) => {
                    result.push(data.toString());
                });

                c_program.on('close', () => {
                    resolve(result.join(''));
                });

                c_program.stdin.write(code);
                c_program.stdin.end();
            } else {
                reject('Compilation failed');
            }
        });

        compiler.stdin.write(code);
        compiler.stdin.end();
    });
}

// C++ 코드 실행 함수
function runCppCode(code) {
    // 구현 생략
}

// Java 코드 실행 함수
function runJavaCode(code) {
    // 구현 생략
}

// Python 코드 실행 함수
function runPythonCode(code) {
    // 구현 생략
}

module.exports = {
    runCCode,
    runCppCode,
    runJavaCode,
    runPythonCode
};
