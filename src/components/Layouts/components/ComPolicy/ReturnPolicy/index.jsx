
function ReturnPolicy(){

    return(
        <>
            <div className="mx-4 sm:mx-10 lg:mx-28 my-28 items-center text-primary text-black">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold  text-center">CHÍNH SÁCH ĐỔI TRẢ</h2>
                <hr className=" h-1 bg-black w-1/2 my-4 mx-auto"/><br />
                <div className="text-lg font-bold text-left pl-1">Trường hợp đổi trả hàng.</div>
                <div className="text-lg pl-2 sm:pl-3 my-4">Cakewai thực hiện việc đổi/trả hàng và hoàn tiền cho khách hàng trong những trường hợp sau:</div>
                <ol className="text-lg list-decimal pl-8 sm:pl-10 text-left text-black">
                    <li className="italic my-4">Sản phẩm shop giao không đúng đơn đặt hàng </li>
                    - Bạn nghĩ rằng sản phẩm giao cho bạn không đúng với đơn đặt hàng? Hãy liên hệ với chúng tôi sớm nhất để được kiểm tra. Nếu được xác nhận do sự nhầm lẫn bên chúng tôi, chúng tôi sẽ thay thể đúng mặt hàng bạn đã yêu cầu (trong thời gian sớm nhất).
                    <li className="italic my-4">Sản phẩm mua bị lỗi </li>
                    - Quý khách vui lòng kiểm tra hàng trước khi thanh toán. Trong trường hợp sản phẩm bị hư hại trong quá trình vận chuyển, Quý khách vui lòng từ chối và gửi lại sản phẩm cho chúng tôi. Đồng thời báo ngay cho chúng tôi để chúng tôi kịp thời thay thế mặt hàng cho Quý khách.

                    <li className="italic my-4">Chúng tôi không chịu trách nhiệm đổi trả đối với trường hợp do khách hàng thay đổi sở thích.</li>
                </ol>
                <div className="text-lg font-bold text-left pl-1 my-4">Điều kiện đổi trả hàng </div>
                <ol className="text-lg list-decimal pl-8 sm:pl-10 text-left text-black ">
               <li className="italic my-4">Điều kiện về thời gian đổi trả: </li>  
                - Trong vòng 05 ngày kể từ khi nhận hàng. 
                <li className="italic my-4"> Điều kiện về sản phẩm: </li> 
                - Hàng hóa còn đầy đủ các bộ phận, không có dấu hiệu đã sử dụng. <br />
                - Có hóa đơn kèm theo. <br />
                - Trong trường hợp không đủ điều kiện trên thì quyền quyết định đổi trả thuộc về Cakewai.
                
                </ol>
            </div>
        </>
    );
}

export default ReturnPolicy