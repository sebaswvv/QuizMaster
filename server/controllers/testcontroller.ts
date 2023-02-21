import { TestService } from '../services/testservice';
import { Request, Response } from "express";

exports.getAllTests = async (req: Request, res: Response) => {
    const testService = new TestService();
    const results = await testService.getAllTests();
    res.send(results);
}