import Vue from "vue"
import { Button, Table, Avatar, Icon, Row, Col, Modal } from "view-design"
let obj = Object.assign({}, { Button, Table, Avatar, Icon, Row, Col, Modal })
for (let com in obj) {
  Vue.component(com, obj[com])
}
