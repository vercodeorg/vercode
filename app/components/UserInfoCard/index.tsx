
const UserInfoCard = () => {
    return (
        <div className="2xl:w-64 lg:w-64 lg:h-[365px] 2xl:h-96 rounded-3xl pt-10 pb-20 bg-[#F5F5F7] flex flex-col justify-between items-center absolute top-14 lg:mt-16 2xl:mt-24">
            <div className="lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 rounded-full active mb-4">
                {/*<Image src={} alt="user-photo" />*/}
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-semibold text-[#1A1A1A] xl:text-2xl">Pedro Henrique</h2>
                <p>#472dsfiu</p>
                <p>4653</p>
                <span>RANK - LV 10</span>
            </div>
        </div>
    )
}

export default UserInfoCard