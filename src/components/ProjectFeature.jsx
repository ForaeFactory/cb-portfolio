
import MUL2 from '/public/projects/MUL2_Portrait.png';
import KH from '/public/projects/KH_Portrait.png';
import BLS from '/public/projects/BLS_Portrait.png';
import Bud from '/public/projects/Bud_Portrait.png';

export const ProjectFeature = () => {
    return (
        <section className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <div className='container mx-auto max-w-5xl'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-50 overflow-hidden">
                                <img src={BLS} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-50 overflow-hidden">
                                <img src={Bud} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-50 overflow-hidden">
                                <img src={MUL2} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-50 overflow-hidden">
                                <img src={KH} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


