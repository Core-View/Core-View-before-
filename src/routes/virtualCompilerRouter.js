// src/routes/virtualCompilerRouter.js

const express = require("express");
const { runCCode, runCppCode, runJavaCode, runPythonCode } = require("../services/virtualCompilerService");
const router = express.Router();

// 가상 컴파일러
router.post("/compile/:language", async (req, res) => {
    const { language } = req.params;
    const { code } = req.body;

    const languageHandler = getLanguageHandler(language);
    if (!languageHandler) {
        res.status(400).send('Unsupported language');
        return;
    }

    try {
        const result = await languageHandler(code);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

function getLanguageHandler(language) {
    switch (language) {
        case 'c':
            return runCCode;
        case 'cpp':
            return runCppCode;
        case 'java':
            return runJavaCode;
        case 'python':
            return runPythonCode;
        default:
            return null;
    }
}

module.exports = router;
