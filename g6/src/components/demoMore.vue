<template>
    <div>
        <div id="mountNode"></div>
    </div>
</template>

<script>
import G6 from "@antv/g6";

export default {
    name: "demoMore",
    data() {
        return {
            msg: ""
        };
    },
    mounted() {
        const data = {
            // 点集
            nodes: [
                {
                    id: "node1", // String，该节点存在则必须，节点的唯一标识
                    label: "new Vue()", // 节点文本
                    class: "dark-blue", // 后面根据class名字来渲染样式
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    // anchorPoints: [0.5, 1],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 200 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node2", // String，该节点存在则必须，节点的唯一标识
                    label: "beforeCreate",
                    class: "red-rect",
                    // anchorPoints: [[0.5, 0], [0.5, 1]],
                    x: 350, // Number，可选，节点位置的 x 值
                    y: 250 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node3", // String，该节点存在则必须，节点的唯一标识
                    label: "Observe Data",
                    class: "green",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 300 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node4", // String，该节点存在则必须，节点的唯一标识
                    label: "Init Events",
                    class: "green",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 400 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node5", // String，该节点存在则必须，节点的唯一标识
                    label: "Has 'el' option",
                    class: "yellow",
                    anchorPoints: [
                        [0.5, 0],
                        [1, 0.5]
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 500 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node6", // String，该节点存在则必须，节点的唯一标识
                    label: "When vm.$mount(el) is called",
                    class: "white",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 650, // Number，可选，节点位置的 x 值
                    y: 570 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node7", // String，该节点存在则必须，节点的唯一标识
                    label: "Has template option?",
                    class: "yellow",
                    anchorPoints: [
                        [0.5, 0],
                        [1, 0.5],
                        [0.5, 1]
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 650 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node8", // String，该节点存在则必须，节点的唯一标识
                    label: "compile template into render function",
                    class: "green",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 350, // Number，可选，节点位置的 x 值
                    y: 750 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node9", // String，该节点存在则必须，节点的唯一标识
                    label: "compile el's outerHTML as template ",
                    class: "green",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 650, // Number，可选，节点位置的 x 值
                    y: 750 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node10", // String，该节点存在则必须，节点的唯一标识
                    label: "create vm.$el and replace 'el' with its",
                    class: "green",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 850 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node11", // String，该节点存在则必须，节点的唯一标识
                    label: "Mounted",
                    class: "red-circle",
                    anchorPoints: [
                        [0.5, 0],
                        [1, 0.5],
                        [0.5, 1]
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 950 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node12", // String，该节点存在则必须，节点的唯一标识
                    label: "when data changes",
                    class: "white",
                    anchorPoints: [
                        [0, 0.5],
                        [1, 0.5]
                    ],
                    size: [80, 45],
                    x: 630, // Number，可选，节点位置的 x 值
                    y: 900 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node13", // String，该节点存在则必须，节点的唯一标识
                    label: "virtual dom re-render and patch",
                    class: "green",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 700, // Number，可选，节点位置的 x 值
                    y: 950 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node14", // String，该节点存在则必须，节点的唯一标识
                    label: "node14",
                    class: "white",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    size: [80, 45],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 1100 // Number，可选，节点位置的 y 值
                },
                 {
                    id: "node15", // String，该节点存在则必须，节点的唯一标识
                    label: "node15",
                    class: "red-rect",
                    anchorPoints: [[1, 0.5]],
                    x: 350, // Number，可选，节点位置的 x 值
                    y: 1150 // Number，可选，节点位置的 y 值
                },
                  {
                    id: "node16", // String，该节点存在则必须，节点的唯一标识
                    label: "node16",
                    class: "green",
                    anchorPoints: [
                        [0.5, 0],
                        [0.5, 1]
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 1250 // Number，可选，节点位置的 y 值
                },
                 {
                    id: "node17", // String，该节点存在则必须，节点的唯一标识
                    label: "node17",
                    class: "red-circle",
                    anchorPoints: [
                        [0.5, 0],
                        [1, 0.5],
                    ],
                    x: 500, // Number，可选，节点位置的 x 值
                    y: 1350 // Number，可选，节点位置的 y 值
                },
                 {
                    id: "node18", // String，该节点存在则必须，节点的唯一标识
                    label: "node18",
                    class: "red-rect",
                    anchorPoints: [[1, 0.5]],
                    x: 350, // Number，可选，节点位置的 x 值
                    y: 1350 // Number，可选，节点位置的 y 值
                }
            ],
            // 边集
            edges: [
                {
                    source: "node1", // String，必须，起始点 id
                    target: "node2", // String，必须，目标点 id
                    type: "polyline"
                },
                {
                    source: "node2", // String，必须，起始点 id
                    target: "node3", // String，必须，目标点 id
                    type: "polyline"
                },
                {
                    source: "node3", // String，必须，起始点 id
                    target: "node4" // String，必须，目标点 id
                },
                {
                    source: "node4", // String，必须，起始点 id
                    target: "node5" // String，必须，目标点 id
                },
                {
                    source: "node5", // String，必须，起始点 id
                    target: "node6", // String，必须，目标点 id
                    type: "polyline",
                    label: "no",
                    labelCfg: {
                        refY: 10,
                        refX: -20
                    }
                },
                {
                    source: "node6", // String，必须，起始点 id
                    target: "node7", // String，必须，目标点 id
                    targetAnchor: 1, // 第几个连接点
                    type: "polyline"
                },
                {
                    source: "node5", // String，必须，起始点 id
                    target: "node7", // String，必须，目标点 id
                    label: "yes",
                    labelCfg: {
                        refY: -10,
                        refX: 25
                    }
                },
                {
                    source: "node7", // String，必须，起始点 id
                    target: "node8", // String，必须，目标点 id
                    type: "polyline",
                    label: "yes",
                    labelCfg: {
                        refY: 10,
                        refX: -20
                    }
                },
                {
                    source: "node7", // String，必须，起始点 id
                    target: "node9", // String，必须，目标点 id
                    type: "polyline",
                    label: "no",
                    labelCfg: {
                        refY: 10,
                        refX: -20
                    }
                },
                {
                    source: "node8", // String，必须，起始点 id
                    target: "node10", // String，必须，目标点 id
                    type: "polyline",

                    labelCfg: {
                        refY: 10,
                        refX: -20
                    }
                },
                {
                    source: "node9", // String，必须，起始点 id
                    target: "node10", // String，必须，目标点 id
                    type: "polyline",

                    labelCfg: {
                        refY: 10,
                        refX: -20
                    }
                },
                {
                    source: "node10", // String，必须，起始点 id
                    target: "node11" // String，必须，目标点 id
                },
                {
                    source: "node11", // String，必须，起始点 id
                    target: "node12", // String，必须，目标点 id
                    sourceAnchor: 1, // 第几个连接点
                    type: "arc"
                },
                {
                    source: "node12", // String，必须，起始点 id
                    target: "node13", // String，必须，目标点 id
                    sourceAnchor: 1, // 第几个连接点
                    curveOffset: 10,
                    type: "arc"
                },
                {
                    source: "node13", // String，必须，起始点 id
                    target: "node11", // String，必须，目标点 id
                    sourceAnchor: 1, // 第几个连接点
                    targetAnchor: 1, // 第几个连接点
                    curveOffset: 80,
                    type: "arc"
                },
                {
                    source: "node11", // String，必须，起始点 id
                    target: "node14" // String，必须，目标点 id
                },
                 {
                    source: "node14", // String，必须，起始点 id
                    target: "node15", // String，必须，目标点 id
                    type: "polyline",
                    sourceAnchor: 1, // 第几个连接点
                    targetAnchor: 1, // 第几个连接点
                },
                 {
                    source: "node14", // String，必须，起始点 id
                    target: "node16", // String，必须，目标点 id
                },
                {
                    source: "node16", // String，必须，起始点 id
                    target: "node17", // String，必须，目标点 id
                },
                {
                    source: "node17", // String，必须，起始点 id
                    target: "node18", // String，必须，目标点 id
                     sourceAnchor: 1, // 第几个连接点
                },
            ]
        };

        const graph = new G6.Graph({
            container: "mountNode", // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 1000, // Number，必须，图的宽度
            height: 2000, // Number，必须，图的高度
            defaultNode: {
                size: 80, // 节点大小
                // 节点样式配置
                style: {
                    fill: "#3ab882" // 节点填充色
                    // stroke: "#666", // 节点描边色
                    // lineWidth: 1 // 节点描边粗细
                },
                // 节点上的标签文本配置
                labelCfg: {
                    // 节点上的标签文本样式配置
                    style: {
                        fill: "#fff" // 节点标签文字颜色
                    }
                }
            },
            // 边在默认状态下的样式配置（style）和其他配置
            defaultEdge: {
                // 边样式配置
                style: {
                    opacity: 0.6, // 边透明度
                    stroke: "#8b9da7", // 边描边颜色
                    endArrow: {
                        path: "M 0,0 L 5,3 L 5,-3 Z", // 自定义箭头路径
                        d: -2 // 偏移量
                    },
                    lineWidth: 2 // 节点描边粗细
                },
                // 边上的标签文本配置
                labelCfg: {
                    autoRotate: true // 边上的标签文本根据边的方向旋转
                }
            }
        });

        const nodes = data.nodes;
        nodes.forEach(node => {
            if (!node.style) {
                node.style = {};
            }

            switch (
                node.class // 根据节点数据中的 class 属性配置图形
            ) {
                case "dark-blue": {
                    node.type = "rect";
                    node.size = [80, 30]; // class = 'c1' 时节点大小
                    node.style = {
                        radius: 4,
                        fill: "#34495d", // 节点填充色
                        stroke: "#34495d" // 描边颜色
                    };
                    break;
                }
                case "red-rect": {
                    node.type = "rect"; // class = 'red-rect' 时节点图形为 rect
                    node.size = [100, 30]; // class = 'red-rect' 时节点大小
                    node.style = {
                        radius: 4,
                        fill: "#fff", // 节点填充色
                        lineWidth: 2,
                        stroke: "#cb6164" // 描边颜色
                    };
                    node.labelCfg = {
                        // 节点上的标签文本样式配置
                        style: {
                            fill: "#cb6164" // 节点标签文字颜色
                        }
                    };
                    break;
                }
                case "green": {
                    node.type = "rect";
                    node.size = [100, 35];
                    node.style = {
                        radius: 4,
                        fill: "#61b586", // 节点填充色
                        lineWidth: 2,
                        stroke: "#68b98d" // 描边颜色
                    };
                    break;
                }
                case "yellow": {
                    node.type = "diamond";
                    node.size = [160, 45];
                    node.style = {
                        radius: 4,
                        fill: "#f2b853", // 节点填充色
                        lineWidth: 2,
                        stroke: "#f2b853" // 描边颜色
                    };
                    break;
                }
                case "white": {
                    node.type = "diamond";
                    if (!node.size) {
                        node.size = [160, 45];
                    }

                    node.style = {
                        radius: 4,
                        fill: "#fff", // 节点填充色
                        lineWidth: 2,
                        stroke: "#fff" // 描边颜色
                    };
                    node.labelCfg = {
                        // 节点上的标签文本样式配置
                        style: {
                            fill: "#8b9da7" // 节点标签文字颜色
                        }
                    };
                    break;
                }
                case "red-circle": {
                    node.type = "circle";
                    node.size = [80, 80];
                    node.style = {
                        radius: 4,
                        fill: "#cb6164", // 节点填充色
                        lineWidth: 2,
                        stroke: "#cb6164" // 描边颜色
                    };
                    break;
                }
            }
        });

        graph.data(data); // 读取 Step 2 中的数据源到图上
        graph.render(); // 渲染图
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
