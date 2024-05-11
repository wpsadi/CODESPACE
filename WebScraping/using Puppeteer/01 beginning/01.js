import puppeteer from "puppeteer";



const resolveIP = async (ip)=>{
    try{
        const browser = await puppeteer.launch({
            // headless:false,
            // defaultViewport:false,
            userDataDir:"./tmp"
        });
        const page = await browser.newPage();
    
        await page.goto("https://api-ninjas.com/api/iplookup",{        
        });
    
    
    
    
        const field = await page.$("#sample-api-request")
    
        await page.evaluate(el=>{el.value=""},field)
    
        await field.type(ip,{delay:0})
    
        const btn = await page.$("#submitSampleAPIRequest")
        btn.click()
    
        await page.waitForNetworkIdle()
    
        const res = await page.$("#sample-response")
    
        const obj = await page.evaluate(el=>el.innerText,res)
    
        await page.waitForNetworkIdle()
        
        await browser.close();
    
        return JSON.parse(obj)
    }
    catch(e){
        return e.message
    }
}


export default resolveIP

