/**
 * 子类 Bullet 子弹对象
 */
var Bullet = function (opts) {
    var opts = opts || {};
    Element.call(this, opts);
    this.icon = opts.icon;
};

// 继承Element的方法
Bullet.prototype = new Element();

/**
 * 方法：fly 向上移动
 */
Bullet.prototype.fly = function() {
    this.move(0, -this.speed);
    return this;
};

/**
 * 方法：判断是否和物体碰撞
 * @return Boolean
 */
Bullet.prototype.hasCrash = function(target) {
    var crash = false;
    // 判断四边是否产生碰撞
    if(!(this.x + this.width < target.x) && 
    !(target.x + target.width < this.x) && 
    !(this.y + this.height < target.y) && 
    !(target.y + target.height < this.y)) {
        // 物体碰撞了
        crash = true;
    }
    return crash;
};

// 方法：draw 方法
Bullet.prototype.draw = function() {
    // 绘画弹道
    context.drawImage(this.icon, this.x, this.y, this.width, this.height);
    return this;
};