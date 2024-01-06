export function TeamMembersCards(props){
    return(
        <div className="grid flex-auto   relative md:min-w-[300px]">
        {/* Section content */}
        <div className=" md:max-w-none md:items-center space-y-8 md:space-y-0">
          {/* Creatives cards */}
          <div className="w-full " data-aos-id-cards>
            {/* Column 1 */}
            <div style={props.shadowImg} className="mx-4 lg:mx-0">
              {/* Item */}
              <div
                className="text-center"
                data-aos-anchor="[data-aos-id-cards]"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <img
                  className="w-full h-30 object-cover"
                  src={props.src1}
                  width="500"
                  height={props.height}
                  alt={props.alt}
                />
                <div className="bg-white pb-6">
                  <div className="relative inline-flex -mt-15 mb-5">
                    <img
                      className="inline-flex rounded-full"
                      src={props.src2}
                      width="200"
                      height={props.height}
                      alt="Nestor"
                    />
                  </div>
                  <div className="mb-5">
                    <h4 className="font-heading font-bold inline-block text-3xl">
                      {props.developerName}
                    </h4>
                    <div className="text-lg font-medium text-gray-500">
                      {props.specialty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}