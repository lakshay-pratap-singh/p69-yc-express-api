const http = require("http");
const multer = require('multer');
const { Sequelize,DataTypes } = require('sequelize');
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const listner = express();
const server = http.createServer(listner);
const PORT = process.argv[2];

listner.use(express.json());
listner.use(helmet());
listner.use(cors({origin:"*"}));


// Database
const DB_CONFIG ={
    username: '',
    password: '',
    database: 'postgres',
    host: '',
    dialect: 'postgres',
};

const dbSql = new Sequelize(DB_CONFIG);


const dbSqlStart = async () => {
    try {
        await dbSql.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log("dbConnectionError", error);
    }

}

const CompanyModal = dbSql.define('company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    about: {
      type: DataTypes.STRING,
    },
    company_url: {
      type: DataTypes.STRING,
    },
    product_demo_video: {
      type: DataTypes.STRING,
    },
    product_url: {
      type: DataTypes.STRING,
    },
    // Add other columns following the same pattern
    // ...
    why_apply_here: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'company',
  })

const sqlModel = {
    Company:CompanyModal,
    Founder:dbSql.define('founder', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        linkedin_url: {
            type: DataTypes.STRING,
        },
        is_technical: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        question_contribution: {
            type: DataTypes.STRING,
        },
        question_meet: {
            type: DataTypes.STRING,
        },
        invites: {
            type: DataTypes.STRING,
        },
        founder_video: {
            type: DataTypes.STRING,
        },
        company_id: {
            type: DataTypes.INTEGER,
            references: {
                model: CompanyModal,
                key: 'id',
            },
        },
    }, {
        tableName: 'founder',
    })    
}

dbSql.sync();


// Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const convertFormDataToJson = () => {
    return upload.any()
}


// Routes handlers
const ycApplicationPostReq = async (req, res) => {
    const body = req.body;
    try {
        const company = await sqlModel.Company.create({
            name: body.company_name,
            about: body.company_about,
            company_url: body.company_url,
            product_demo_video: body.product_demo,
            product_url: body.product_url,
            vision: body.your_vision,
            where: body.q_where,
            where_why: body.q_where_why,
            how_for: body.q_how_for,
            how_long_worked: body.how_long_worked,
            techstack_used: body.tech_used,
            product_status: body.product_status,
            when_beta: body.when_beta,
            revenue: body.curr_revenue,
            reapply_reason: body.reapply_reason,
            pre_incubator: body.pre_incubator,
            company_idea: body.company_idea,
            competitors: body.competitors,
            how_make_money: body.how_make_money,
            user_base: body.user_base,
            company_category: body.company_category,
            legal_formed: body.legal_formed,
            equity: body.equity,
            investyet: body.investyet,
            fundraising: body.fundraising,
            ideas: body.ideas,
            referral_code: body.referral_code,
            how_hear: body.how_hear,
            why_apply_here: body.why_apply_here,
        });

        const founder = await sqlModel.Founder.create({
            name: body.founder_name,
            email: body.founder_email,
            linkedin_url: body.founder_linkedin,
            is_technical: body.is_tech_person,
            age: body.founder_age,
            gender: body.founder_gender,
            question_contribution: body.question_contribution,
            question_meet: body.question_meet,
            invites: body.invites,
            founder_video: body.founder_video,
            company_id: company.dataValues.id
        })
        return res.send({
            company: company.dataValues,
            founder: founder.dataValues
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }

}

const ycApplicationPutReq = async (req, res) => {
    const body = req.body;
    try {
        const company = await sqlModel.Company.update({
            name: body.company_name,
            about: body.company_about,
            company_url: body.company_url,
            product_demo_video: body.product_demo,
            product_url: body.product_url,
            vision: body.your_vision,
            where: body.q_where,
            where_why: body.q_where_why,
            how_for: body.q_how_for,
            how_long_worked: body.how_long_worked,
            techstack_used: body.tech_used,
            product_status: body.product_status,
            when_beta: body.when_beta,
            revenue: body.curr_revenue,
            reapply_reason: body.reapply_reason,
            pre_incubator: body.pre_incubator,
            company_idea: body.company_idea,
            competitors: body.competitors,
            how_make_money: body.how_make_money,
            user_base: body.user_base,
            company_category: body.company_category,
            legal_formed: body.legal_formed,
            equity: body.equity,
            investyet: body.investyet,
            fundraising: body.fundraising,
            ideas: body.ideas,
            referral_code: body.referral_code,
            how_hear: body.how_hear,
            why_apply_here: body.why_apply_here,
        }, { where: { id: Number(body.company_id) } });

        const founder = await sqlModel.Founder.update({
            name: body.founder_name,
            email: body.founder_email,
            linkedin_url: body.founder_linkedin,
            is_technical: body.is_tech_person,
            age: body.founder_age,
            gender: body.founder_gender,
            question_contribution: body.question_contribution,
            question_meet: body.question_meet,
            invites: body.invites,
            founder_video: body.founder_video
        }, { where: { id: Number(body.founder_id) } })

        return res.send({
            company: company.dataValues,
            founder: founder.dataValues
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }

}



listner.post("/applications/yc",convertFormDataToJson(),ycApplicationPostReq);
listner.put("/applications/yc",convertFormDataToJson(),ycApplicationPutReq)




const startServer = async () => {
    await dbSqlStart();
    server.listen(PORT,() => {
        console.log("Nodejs serer is running on port " + PORT)
    })
}

startServer();