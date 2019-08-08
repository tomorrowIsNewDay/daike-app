/**
 * @author leeming
 * @description school controller
 */

const school_model = require('../models/school.js')

const getSchoolByName = async(ctx, next)=>{
    const req = ctx.request.body
    
    const schools = await school_model.find({
        name: new RegExp(req.schoolName)
    }).limit(10)

    ctx.status = 200
    if(schools) {
        ctx.body = {
            code: 1,
            data: schools
        }
    }else{
        ctx.body = {
            code: 0,
            msg: 'find error'
        }
    }
}

const insertSchoolByName = async(ctx, next)=> {
    const schools = await school_model.insertMany([
    {  
        "id" : "3611", 
        "name" : "遵义医学院", 
        "website" : "http://www.zmc.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "zmc", 
        "city" : "遵义市"
    },
    {  
        "id" : "3613", 
        "name" : "贵州师范大学", 
        "website" : "http://www.gznu.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "gznu", 
        "city" : "贵阳市"
    },
    {  
        "id" : "3612", 
        "name" : "贵阳中医学院", 
        "website" : "http://www.gyctcm.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "gyctcm", 
        "city" : "贵阳市"
    },
    {  
        "id" : "3614", 
        "name" : "遵义师范学院", 
        "website" : "http://www.zync.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "zync", 
        "city" : "遵义市"
    },
    {  
        "id" : "3615", 
        "name" : "铜仁学院", 
        "website" : "http://www.gztrc.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "gztrc", 
        "city" : "铜仁市"
    },
    {  
        "id" : "3616", 
        "name" : "兴义民族师范学院", 
        "website" : "http://www.qxntc.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "qxntc", 
        "city" : "兴义市"
    },
    {  
        "id" : "3617", 
        "name" : "安顺学院", 
        "website" : "http://www.asu.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "asu", 
        "city" : "安顺市"
    },
    {  
        "id" : "3618", 
        "name" : "贵州工程应用技术学院", 
        "website" : "http://www.gues.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "gues", 
        "city" : "毕节市"
    },
    {  
        "id" : "3619", 
        "name" : "凯里学院", 
        "website" : "http://www.kluniv.cn/",  
        "level" : "本科", 
        "abbreviation" : "kluniv", 
        "city" : "凯里市"
    },
    {  
        "id" : "3620", 
        "name" : "黔南民族师范学院", 
        "website" : "http://www.sgmtu.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "sgmtu", 
        "city" : "都匀市"
    },
    {  
        "id" : "3621", 
        "name" : "贵州财经大学", 
        "website" : "http://www.gzife.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "gzife", 
        "city" : "贵阳市"
    },
    {  
        "id" : "3622", 
        "name" : "贵州民族大学", 
        "website" : "http://www.gzmu.edu.cn/",  
        "level" : "本科", 
        "abbreviation" : "gzmu", 
        "city" : "贵阳市"
    },
    {  
        "id" : "3623", 
        "name" : "贵阳学院", 
        "website" : "http://www.gyu.cn/",  
        "level" : "本科", 
        "abbreviation" : "gyu", 
        "city" : "贵阳市"
    }])

    console.log(schools)
    ctx.status = 200
    ctx.body = {
        code: 1,
        msg: '写入成功'
    }

}

 module.exports = {
    getSchoolByName,
    insertSchoolByName
 }