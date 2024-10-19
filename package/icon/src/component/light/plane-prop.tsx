
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plane-prop` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plane-prop?s=light plane-prop}
 * @preview ![plane-prop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjMuOTk1IDE3NkgzNTkuMDIyTDM0OS44NzkgMTEySDM2Ny45OTJWMTQ0QzM2Ny45OTIgMTUyLjgzNiAzNzUuMTU2IDE2MCAzODMuOTkyIDE2MFMzOTkuOTkzIDE1Mi44MzYgMzk5Ljk5MyAxNDRWMTEyQzQwOC44MjkgMTEyIDQxNS45OTMgMTA0LjgzNiA0MTUuOTkzIDk2QzQxNS45OTMgODcuMTYyIDQwOC44MjkgODAgMzk5Ljk5MyA4MFY0OEMzOTkuOTkzIDM5LjE2MiAzOTIuODI4IDMyIDM4My45OTIgMzJTMzY3Ljk5MiAzOS4xNjIgMzY3Ljk5MiA0OFY4MEgzNDUuMzA3TDMzNy44MDMgMjcuNDY5QzMzNS41NTMgMTEuODEyIDMyMS45MjcgMCAzMDYuMTE0IDBIMjY5Ljg2M0MyNTQuMDQ5IDAgMjQwLjQyNCAxMS44MTIgMjM4LjE3NCAyNy40NjlMMjM1LjI0NCA0OEgyMjMuOTg2QzE5Ny41MTYgNDggMTc1Ljk4NCA2OS41MzEgMTc1Ljk4NCA5NkMxNzUuOTg0IDEyMS42NDYgMTk2LjI0OCAxNDIuNDc3IDIyMS41ODMgMTQzLjc1OEwyMTYuMzI5IDE4MC41NzhMMTQ3LjkyIDE4Ni4yODFMMTQyLjY3IDE0OS41MzFDMTQwLjg1NyAxMzcuMjY2IDEzMC4xNjkgMTI4IDExNy43NjMgMTI4SDc0LjE5OEM2MS43OTIgMTI4IDUxLjEwNCAxMzcuMjY2IDQ5LjM1NCAxNDkuMTU2TDM5Ljk0NyAyMDQuNDIyQzI1LjAwOSAyMDguMjY2IDEyLjUwOCAyMTguMzU5IDUuNjAyIDIzMi4xNzJDLTEuODY3IDI0Ny4wOTQgLTEuODY3IDI2NC45MDYgNS42MDIgMjc5Ljg0NEMxMi4yOSAyOTMuMTU2IDI0LjE2NSAzMDMuMDMxIDM5LjkxNiAzMDcuNDM4TDQ5LjI5MSAzNjIuNDY5QzUxLjEwNCAzNzQuNzUgNjEuNzkyIDM4NCA3NC4xOTggMzg0SDExNy43NjNDMTMwLjE2OSAzODQgMTQwLjg1NyAzNzQuNzUgMTQyLjY3IDM2Mi40MDZMMTQ3LjkyIDMyNS43MTlMMjE2LjMyOSAzMzEuNDA2TDIyMS41ODUgMzY4LjI0MkMxOTYuMjUgMzY5LjUyMSAxNzUuOTg0IDM5MC4zNTQgMTc1Ljk4NCA0MTZDMTc1Ljk4NCA0NDIuNDY5IDE5Ny41MTYgNDY0IDIyMy45ODYgNDY0SDIzNS4yNDhMMjM4LjE3NCA0ODQuNUMyNDAuMzkzIDUwMC4xODggMjU0LjAxOCA1MTIgMjY5Ljg2MyA1MTJIMzA2LjExNEMzMjEuOTU4IDUxMiAzMzUuNTg0IDUwMC4xODggMzM3LjgwMyA0ODQuNUwzNDUuMzA1IDQzMkgzNjcuOTkyVjQ2NEMzNjcuOTkyIDQ3Mi44MzYgMzc1LjE1NiA0ODAgMzgzLjk5MiA0ODBTMzk5Ljk5MyA0NzIuODM2IDM5OS45OTMgNDY0VjQzMkM0MDguODI5IDQzMiA0MTUuOTkzIDQyNC44MzYgNDE1Ljk5MyA0MTZDNDE1Ljk5MyA0MDcuMTYyIDQwOC44MjkgNDAwIDM5OS45OTMgNDAwVjM2OEMzOTkuOTkzIDM1OS4xNjIgMzkyLjgyOCAzNTIgMzgzLjk5MiAzNTJTMzY3Ljk5MiAzNTkuMTYyIDM2Ny45OTIgMzY4VjQwMEgzNDkuODc4TDM1OS4wMjIgMzM2SDQ2My45OTVDNTAyLjQ2NiAzMzYgNTc2IDMwNC44NDQgNTc2IDI1NlM1MDIuNDY2IDE3NiA0NjMuOTk1IDE3NlpNMjIzLjk4NiAxMTJDMjE1LjE3MyAxMTIgMjA3Ljk4NSAxMDQuODI4IDIwNy45ODUgOTZTMjE1LjE3MyA4MCAyMjMuOTg2IDgwSDIzMC42NzlMMjI2LjExMyAxMTJIMjIzLjk4NlpNMjIzLjk4NiA0MzJDMjE1LjE3MyA0MzIgMjA3Ljk4NSA0MjQuODEyIDIwNy45ODUgNDE2UzIxNS4xNzMgNDAwIDIyMy45ODYgNDAwSDIyNi4xMTdMMjMwLjY4MyA0MzJIMjIzLjk4NlpNNDYzLjk5NSAzMDRIMzMxLjI3MUwzMDYuMTE0IDQ4MEgyNjkuODYzTDI0NC4zOTMgMzAxLjY1NkwxMjAuNDgxIDI5MS4zNDRMMTExLjgyNSAzNTJINzkuOThMNjcuNTQyIDI3OS4xNDFMNDguMDcyIDI3Ni42MjVDNDIuMDcyIDI3NS4xNDEgMzcuMDA5IDI3MS4wNzggMzQuMjI4IDI2NS41MTZDMzEuMjU5IDI1OS41NjIgMzEuMjU5IDI1Mi40MzcgMzQuMjI4IDI0Ni41QzM3LjAwOSAyNDAuOTM3IDQyLjA3MiAyMzYuODc1IDQ2LjMyMiAyMzUuNzAzTDY3LjU0MiAyMzIuODU5TDc5Ljk4IDE2MEgxMTEuODI1TDEyMC40ODEgMjIwLjY4OEwyNDQuMzkzIDIxMC4zNTlMMjY5Ljg2MyAzMkgzMDYuMTE0TDMzMS4yNzEgMjA4SDQ2My45OTVDNDk1LjU5IDIwOCA1NDMuOTk5IDIzMy43NSA1NDMuOTk5IDI1NlM0OTUuNTkgMzA0IDQ2My45OTUgMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PlaneProp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M463.995 176H359.022L349.879 112H367.992V144C367.992 152.836 375.156 160 383.992 160S399.993 152.836 399.993 144V112C408.829 112 415.993 104.836 415.993 96C415.993 87.162 408.829 80 399.993 80V48C399.993 39.162 392.828 32 383.992 32S367.992 39.162 367.992 48V80H345.307L337.803 27.469C335.553 11.812 321.927 0 306.114 0H269.863C254.049 0 240.424 11.812 238.174 27.469L235.244 48H223.986C197.516 48 175.984 69.531 175.984 96C175.984 121.646 196.248 142.477 221.583 143.758L216.329 180.578L147.92 186.281L142.67 149.531C140.857 137.266 130.169 128 117.763 128H74.198C61.792 128 51.104 137.266 49.354 149.156L39.947 204.422C25.009 208.266 12.508 218.359 5.602 232.172C-1.867 247.094 -1.867 264.906 5.602 279.844C12.29 293.156 24.165 303.031 39.916 307.438L49.291 362.469C51.104 374.75 61.792 384 74.198 384H117.763C130.169 384 140.857 374.75 142.67 362.406L147.92 325.719L216.329 331.406L221.585 368.242C196.25 369.521 175.984 390.354 175.984 416C175.984 442.469 197.516 464 223.986 464H235.248L238.174 484.5C240.393 500.188 254.018 512 269.863 512H306.114C321.958 512 335.584 500.188 337.803 484.5L345.305 432H367.992V464C367.992 472.836 375.156 480 383.992 480S399.993 472.836 399.993 464V432C408.829 432 415.993 424.836 415.993 416C415.993 407.162 408.829 400 399.993 400V368C399.993 359.162 392.828 352 383.992 352S367.992 359.162 367.992 368V400H349.878L359.022 336H463.995C502.466 336 576 304.844 576 256S502.466 176 463.995 176ZM223.986 112C215.173 112 207.985 104.828 207.985 96S215.173 80 223.986 80H230.679L226.113 112H223.986ZM223.986 432C215.173 432 207.985 424.812 207.985 416S215.173 400 223.986 400H226.117L230.683 432H223.986ZM463.995 304H331.271L306.114 480H269.863L244.393 301.656L120.481 291.344L111.825 352H79.98L67.542 279.141L48.072 276.625C42.072 275.141 37.009 271.078 34.228 265.516C31.259 259.562 31.259 252.437 34.228 246.5C37.009 240.937 42.072 236.875 46.322 235.703L67.542 232.859L79.98 160H111.825L120.481 220.688L244.393 210.359L269.863 32H306.114L331.271 208H463.995C495.59 208 543.999 233.75 543.999 256S495.59 304 463.995 304Z" />
        </Icon>
    </>
}