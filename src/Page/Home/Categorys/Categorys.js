import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categorys = () => {
    const Category = [
        {
            id:1,
            name:"cafe racer",
            img:"https://kickstart.bikeexif.com/wp-content/uploads/2019/01/honda-cb750-cafe-racer.jpg",
            details:"Café racers were standard production bikes that were modified by their owners and optimized for speed and handling for quick rides over short distances"
        },
        {
            id:2,
            name:"naked bikes",
            img:"https://cdn.visordown.com/field/image/84623.jpg",
            details:"The naked bike is a common sight on the roads these days. You can hardly say motorcycling without thinking of one. Where the supersport looses."
        },
        {
            id:3,
            name:"sport bikes",
            img:"https://cdn11.bigcommerce.com/s-5wloa99oru/images/stencil/1280x1280/products/32549/45892/H2R__88224.1565258503.PNG?c=2",
            details:"A sport bike is a motorcycle designed and optimized for speed, acceleration, braking, and cornering on asphalt concrete race tracks and roads."
        }
    ]
    return (
        <div className='mt-4'>
            <h4 className='text-center font-semibold text-xl'>Our Category</h4>
            <div className='my-3 md:grid md:grid-cols-3'>
                {
                    Category.map(Categorys => <CategoryCard key={Categorys.id} Categorys={Categorys}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categorys;