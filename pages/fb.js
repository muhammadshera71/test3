function PetsPage(){
return(
    <div>
        {
            ['1','2','3','4','5','6','7','8','9','10','11','12','13'].map(path=> {
                return(
                    <div key={path}>
                        <img src={'/$(path).jpg'} alt='pet' width='280' height='420'/>
                    </div>
                )

            })
        }
    </div>
)

}