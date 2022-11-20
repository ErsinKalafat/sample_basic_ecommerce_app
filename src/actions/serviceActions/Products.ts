class Products {
    public static FetchProducts = async () => {
        return ([
            { id: '0001', name: 'Elmas Yüzük', image: require('../../images/image-1.png') },
            { id: '0002', name: 'Elmas Kolye', image: require('../../images/image-2.png') },
            { id: '0003', name: 'Elmas Küpe', image: require('../../images/image-3.png') },
            { id: '0004', name: 'Elmas Bileklik', image: require('../../images/image-4.png') }
        ])
    }
}

export default Products
