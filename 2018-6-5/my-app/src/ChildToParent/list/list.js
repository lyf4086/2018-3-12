import React,{Component} from 'react';
 /*
    父级传递的数据只能父级修改，子级修改不了

    子传父，通过回调函数传递。

        父级定义一个修改数据的方法，传给子级，让子级去调用
        达到，触发子级，修改父级的数据，渲染最新的数据
*/
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    change = () => {
        let {cc,id} = this.props;
        cc(id);
        // console.log( this.props )
    }
    render() { 
        let {id,txt,checked} = this.props;
        return (
            <li>
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange={this.change}
                />
                <span>{txt}{''+checked}</span>
            </li>
        )
    }
}
 
export default List;
