import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
	res.render("inicio",{
		pagina:"Inicio"
	});
});

router.get("/nosotros",(req,res)=>{
        res.render("nosotros",{
		pagina:"Nosotros"
	});
});

router.get("/trabajos",(req,res)=>{
        res.render("trabajos",{
                pagina:"Trabajos"
        });
});

router.get("/testimoniales",(req,res)=>{
        res.render("testimoniales",{
                pagina:"Testimoniales"
        });
});




export default router;
