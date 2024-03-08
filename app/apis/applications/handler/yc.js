const sqlModel = require("../../../database/models");



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

module.exports = {
    ycApplicationPostReq,
    ycApplicationPutReq
};