/*** how to define  type for object 1.classes 2.interface
 * In TypeScript, an interface is used to define the shape of an object — like a contract that the object must follow.
 *
 */
interface Product {
  name: string
  price: number
  brand: string
  display: () => void
}
let p1: Product = {
  name: 'Iphone',
  price: 100000,
  brand: 'Apple',
  display: () => {
    console.log('display done')
  },
}
console.log(p1)

