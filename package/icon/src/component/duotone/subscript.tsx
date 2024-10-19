
import { Icon, generic } from "../../index";

/**
 * A component that renders the `subscript` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/subscript?s=duotone subscript}
 * @preview ![subscript](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiA0MDhDMzUyIDQzMC4wOTQgMzM0LjA5NCA0NDggMzEyIDQ0OEgyODEuNzgxQzI2OC42ODggNDQ4IDI1Ni40MjIgNDQxLjU5NCAyNDguOTUzIDQzMC44NDRMMTc2IDMyNi4wMTZMMTAzLjA0NyA0MzAuODQ0Qzk1LjU3OCA0NDEuNTk0IDgzLjMxMiA0NDggNzAuMjE5IDQ0OEg0MEMxNy45MDYgNDQ4IDAgNDMwLjA5NCAwIDQwOFMxNy45MDYgMzY4IDQwIDM2OEg0OS4zMjhMMTI3LjI3MyAyNTZMNDkuMzI4IDE0NEg0MEMxNy45MDYgMTQ0IDAgMTI2LjA5NCAwIDEwNFMxNy45MDYgNjQgNDAgNjRINzAuMjE5QzgzLjMxMiA2NCA5NS41NzggNzAuNDA2IDEwMy4wNDcgODEuMTU2TDE3NiAxODUuOTg0TDI0OC45NTMgODEuMTU2QzI1Ni40MjIgNzAuNDA2IDI2OC42ODggNjQgMjgxLjc4MSA2NEgzMTJDMzM0LjA5NCA2NCAzNTIgODEuOTA2IDM1MiAxMDRTMzM0LjA5NCAxNDQgMzEyIDE0NEgzMDIuNjcyTDIyNC43MjcgMjU2TDMwMi42NzIgMzY4SDMxMkMzMzQuMDk0IDM2OCAzNTIgMzg1LjkwNiAzNTIgNDA4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MTIgNDgwQzUxMiA0OTcuNjg4IDQ5Ny42NzIgNTEyIDQ4MCA1MTJINDE2QzM5OC4zMjggNTEyIDM4NCA0OTcuNjg4IDM4NCA0ODBTMzk4LjMyOCA0NDggNDE2IDQ0OEg0MTYuMjgxVjM3Mi42ODhDNDA1Ljc5NyAzNzIuNjg4IDM5NS41MzEgMzY3LjUzMSAzODkuNDA2IDM1OC4wNjNDMzc5LjgxMiAzNDMuMjE5IDM4NC4wNjIgMzIzLjQwNiAzOTguOTA2IDMxMy44MTNMNDMwLjkwNiAyOTMuMTI1QzQ0MC43NjYgMjg2Ljc1IDQ1My4yNjYgMjg2LjIxOSA0NjMuNTc4IDI5MS45MDZDNDczLjg3NSAyOTcuNSA0ODAuMjgxIDMwOC4yODEgNDgwLjI4MSAzMjBWNDQ4LjA1N0M0OTcuODE0IDQ0OC4yMTcgNTEyIDQ2Mi40MTIgNTEyIDQ4MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Subscript: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 408C352 430.094 334.094 448 312 448H281.781C268.688 448 256.422 441.594 248.953 430.844L176 326.016L103.047 430.844C95.578 441.594 83.312 448 70.219 448H40C17.906 448 0 430.094 0 408S17.906 368 40 368H49.328L127.273 256L49.328 144H40C17.906 144 0 126.094 0 104S17.906 64 40 64H70.219C83.312 64 95.578 70.406 103.047 81.156L176 185.984L248.953 81.156C256.422 70.406 268.688 64 281.781 64H312C334.094 64 352 81.906 352 104S334.094 144 312 144H302.672L224.727 256L302.672 368H312C334.094 368 352 385.906 352 408Z" />
            <path d="M512 480C512 497.688 497.672 512 480 512H416C398.328 512 384 497.688 384 480S398.328 448 416 448H416.281V372.688C405.797 372.688 395.531 367.531 389.406 358.063C379.812 343.219 384.062 323.406 398.906 313.813L430.906 293.125C440.766 286.75 453.266 286.219 463.578 291.906C473.875 297.5 480.281 308.281 480.281 320V448.057C497.814 448.217 512 462.412 512 480Z" />
    </Icon>
);

export default Subscript;