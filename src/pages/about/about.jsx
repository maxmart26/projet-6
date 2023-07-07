import Img from "../../datas/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Baniere from "../../components/banner/banner"
import datas from "../../datas/datas-propos.json"
import Collapse from "../../components/Collapse/Collapse"
import "./about.css"
function Propos(){
    console.log(datas);
    let i=0
        return(
            <section>
                <Baniere
                photo={Img}
                alt={"paysage de montagne"}
                titre={""}
                />
                <div className="info">
                    {datas.map((data) => (
                            <div key={data.id}>
                              <Collapse content={data.description} title={data.titre} />
                            </div>
                        ))}
                </div>
            </section>
        )
}
export default Propos