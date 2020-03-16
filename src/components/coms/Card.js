import React from "react"
import { message } from "antd"
import "./Card.css"
import { IconFont } from "../iconfont"

export default function Card(props) {
    const openUrl = url => {
        const shell = window.electron.shell
        shell.openExternal(url)
    }

    const copyGitAddr = (url) => {
        const clipboard = window.electron.clipboard
        clipboard.writeText(url)
        message.success("Git地址成功复制到剪贴板")
    }

    return (
        <div className="Card">
            <div className="top">
                <div className="temp">{props.name}</div>
                <div className="updated">{props.updated}</div>
            </div>
            <div className="bottom">
                <div className="repo">
                    <span>
                        Git:{" "}
                        <span
                            onClick={() => {
                                openUrl(props.url)
                            }}
                            style={{
                                textDecoration: "underline",
                                cursor: "pointer"
                            }}
                        >
                            {props.url}
                        </span>
                    </span>
                    <span onClick={() => copyGitAddr(props.url)}>
                        <IconFont
                            type="icon-copy"
                            style={{ fontSize: 20, color: "#3c40c6", cursor: "pointer" }}
                        />
                    </span>
                </div>
                <div className="desp">{props.desp}</div>
            </div>
        </div>
    )
}
