import {NextApiRequest, NextApiResponse} from "next";



const APISample = async (req: NextApiRequest, res: NextApiResponse) => {

    const {
    } = req.query;

    res.send({
        hi: "WORLD"
    })
};

export default APISample