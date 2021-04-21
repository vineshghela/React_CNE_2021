import {create} from 'react-test-renderer';
import '@testing-library/jest-dom';
import {expect, it} from '@jest/globals';
import EndContactContactCardBluePrint from '../Components/03-Props/03-Contact-Card/EndContactCardBluePrint';
import EndContactCard from '../Components/03-Props/03-Contact-Card/EndContactCard';

describe(`End contact card blue print testing with props`,()=>{

    const props={
        whatPet:"This is a dog",
        petName:"Harry Pawter",
        phone:"(+44)77777777",
        email:"jimmy@chew.pup",
        img:"https://placedog.net/samples/2.jpg"
    }
    
    let componentToTest;

    beforeEach(()=>{
        const testInstance = create(<EndContactContactCardBluePrint{...props}/>);
        componentToTest = testInstance.root;
        // console.log("Before each",componentToTest);
    })

    // it(`should render a H3 with the name of the pet`,()=>{
    //     const h3 = componentToTest.findByType(`h3`);
    //     // console.log("my h3",h3);
    //     expect(h3.children).toEqual([props.petName]);
    // })
    // it(`should render phone number in the first p tag`,()=>{
    //     const firstP = componentToTest.findAllByType(`p`)[0];
    //     console.log(firstP.children[1]);
    // })
    // it(`should render email for the second p tag`,()=>{
    //     const secondP = componentToTest.findAllByType(`p`)[1];
    //     console.log(secondP.children[1]);
    // })

    // it(`should match the snapshot`,()=>{
    //     const instance = create(<EndContactContactCardBluePrint {...props}/>).toJSON();
    //     expect(instance).toMatchSnapshot();
    // })

    const mockChildComponent = jest.mock(`../Components/03-Props/03-Contact-Card/EndContactCard`,()=>{
        return EndContactCard=(props)=>{
            return <p>Mocked Component</p>;
        }
    })

    console.log(mockChildComponent);

    it(`it should match the snapshot`,()=>{
        const instance = create(<mockChildComponent/>).toJSON();
        expect(instance).toReturnWith(mockChildComponent);
    })
})
