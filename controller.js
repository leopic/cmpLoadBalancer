module.exports.run = function (balancer) {
    balancer.addMiddleware(balancer.MIDDLEWARE_CONNECTION, function (socket, next) {
        console.log('HIT: ' + socket.remoteAddress);
        console.log(balancer.activeTargetsLookup);
        next();
    });
};