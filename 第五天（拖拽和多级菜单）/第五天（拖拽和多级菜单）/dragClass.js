//new Drag(div1); // 目的 ： div1可以拖拽，mousedown事件已经绑定。
// 类的封装 : 方法放在原型上，属性放在私有属性上
// 用公有方法去操作私有属性，实例本身作为承上启下的这么载体
;(function (){

    function Drag(ele,range){
        this.ele = ele; // div1  把要拖拽的元素存在实例的ele私有属性上
        this.ele.l = null;
        this.ele.t = null;
        this.ele.range = range;
        var that = this; // 实例
        this.ele.DOWN = function (e){
            //that.down.call(that,e);
            that.down(e)
        }
        this.ele.MOVE = function (e){
            that.move(e);
        }
        this.ele.UP = function (e){
            that.up(e);
        }

        on(this.ele,'mousedown',/*this.down*/this.ele.DOWN); // 绑定事件当鼠标按下的时刻，执行原型上的down方法，down方法中的this就是ele了 => 类的封装必须保证原型上方法中的this是实例

    }

    Drag.prototype.down = function (e){
        // 事件发生执行的时刻this是实例
        this.ele.l = e.pageX - this.ele.offsetLeft; // 元素在实例的ele属性上
        this.ele.t = e.pageY - this.ele.offsetTop;
        if(this.ele.setCapture){
            this.ele.setCapture();
            on(this.ele,'mousemove',this.ele.MOVE);
            on(this.ele,'mouseup',this.ele.UP);
        }else{
            on(document,'mousemove',this.ele.MOVE);
            on(document,'mouseup',this.ele.UP);
        }
        // 开始拖拽的时刻要做什么???
    }

    Drag.prototype.move = function (e){
        var left = e.pageX - this.ele.l;
        var top = e.pageY - this.ele.t;
        var minLeft = 0, minTop = 0;
        // 这个范围有可能没有，这个range有可能是undefined
        var maxLeft = this.ele.range ? this.ele.range.left : (document.documentElement.clientWidth|| document.body.clientWidth) - this.ele.offsetWidth;
        var maxTop = this.ele.range ? this.ele.range.top : (document.documentElement.clientHeight || document.body.clientHeight) - this.ele.offsetHeight;
        left = left < minLeft ? minLeft : left > maxLeft ? maxLeft : left;
        top = top > maxTop ? maxTop : top < minTop ? minTop : top;
        this.ele.style.left = left + 'px';
        this.ele.style.top = top + 'px';
        e.preventDefault();
        // 拖拽中要做什么???
    }

    Drag.prototype.up = function (e){
        if(this.ele.releaseCapture){
            this.ele.releaseCapture();
            off(this.ele,'mousemove',this.ele.MOVE);
            off(this.ele,'mouseup',this.ele.UP);
        }else{
            off(document,'mousemove',this.ele.MOVE);
            off(document,'mouseup',this.ele.UP);
        }
        // 拖拽结束之后要做什么???

    }

    window.Drag = Drag;
})();
