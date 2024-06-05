const { pool } = require('../../config/databaseSet');
const { runCCode, runCppCode, runJavaCode, runPythonCode } = require('../services/virtualCompilerService');

async function compileCode(req, res) {
    const { language, code } = req.body;

    try {
        let output;
        switch (language) {
            case 'c':
                output = await runCCode(code);
                break;
            case 'cpp':
                output = await runCppCode(code);
                break;
            case 'java':
                output = await runJavaCode(code);
                break;
            case 'python':
                output = await runPythonCode(code);
                break;
            default:
                return res.status(400).send('Unsupported language');
        }

        // MySQL에 데이터 삽입
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.execute(
            'INSERT INTO compiler_results (code, result) VALUES (?, ?)',
            [code, output]
        );
        connection.release();

        res.send({ output });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
}

module.exports = {
    compileCode
};
