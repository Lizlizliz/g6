<template>
    <div>
        <div id="mountNode"></div>
    </div>
</template>

<script>
import G6 from "@antv/g6";

export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted() {
        const data = {
            // 点集
            nodes: [
                {
                    id: "node1", // String，该节点存在则必须，节点的唯一标识
                    label: "new Vue()", // 节点文本
                    type: "rect",
                    size: [80, 30],
                    style: {
                        radius: 4,
                        fill: "#34495d", // 节点填充色
                        stroke:"#34495d",// 描边颜色
                    },
                    x: 100, // Number，可选，节点位置的 x 值
                    y: 200 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node2", // String，该节点存在则必须，节点的唯一标识
                    label: "目标点",
                    x: 100, // Number，可选，节点位置的 x 值
                    y: 400 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node3", // String，该节点存在则必须，节点的唯一标识
                    label: "左边1",
                    x: 0, // Number，可选，节点位置的 x 值
                    y: 400 // Number，可选，节点位置的 y 值
                },
                {
                    id: "node4", // String，该节点存在则必须，节点的唯一标识
                    label: "右边1",
                    x: 200, // Number，可选，节点位置的 x 值
                    y: 400 // Number，可选，节点位置的 y 值
                }
            ],
            // 边集
            edges: [
                {
                    source: "node1", // String，必须，起始点 id
                    target: "node2" // String，必须，目标点 id
                },
                {
                    source: "node2", // String，必须，起始点 id
                    target: "node3" // String，必须，目标点 id
                },
                {
                    source: "node2", // String，必须，起始点 id
                    target: "node4" // String，必须，目标点 id
                }
            ]
        };

        const graph = new G6.Graph({
            container: "mountNode", // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 800, // Number，必须，图的宽度
            height: 500, // Number，必须，图的高度
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
                    stroke: "#8b9da7" // 边描边颜色
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
                case "c0": {
                    node.type = "circle"; // class = 'c0' 时节点图形为 circle
                    break;
                }
                case "c1": {
                    node.type = "rect"; // class = 'c1' 时节点图形为 rect
                    node.size = [35, 20]; // class = 'c1' 时节点大小
                    break;
                }
                case "c2": {
                    node.type = "ellipse"; // class = 'c2' 时节点图形为 ellipse
                    node.size = [35, 20]; // class = 'c2' 时节点大小
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
