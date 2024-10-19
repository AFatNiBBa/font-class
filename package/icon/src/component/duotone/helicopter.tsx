
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=duotone helicopter}
 * @preview ![helicopter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAzMkMxMjggMTQuMzI4IDE0Mi4zMjggMCAxNjAgMEg1NDMuOTk2QzU2MS42NjggMCA1NzUuOTk2IDE0LjMyOCA1NzUuOTk2IDMyUzU2MS42NjggNjQgNTQzLjk5NiA2NEgzODMuOTk4VjEyOEgzMTkuOTk4VjY0SDE2MEMxNDIuMzI4IDY0IDEyOCA0OS42NzIgMTI4IDMyWk02MTMuMjQ1IDQzNi42MjVDNjA2Ljk5NSA0MzAuMzc1IDU5Ni45OTYgNDMwLjUgNTkwLjYyMSA0MzYuNjI1QzU4My40OTYgNDQzLjM3NSA1NzYuNzQ2IDQ0Ny44NzUgNTY1Ljk5NiA0NDcuODc1SDI3Mi4xMjRDMjQ1LjU0NiA0NDcuODc1IDIyMy45OTkgNDY5LjQyMiAyMjMuOTk5IDQ5NkMyMjMuOTk5IDUwNC43OTcgMjMxLjIwMiA1MTIgMjM5Ljk5OSA1MTJINTY1Ljk5NkM1ODAuODc1IDUxMiA2MDEuMjU3IDUxMS41IDYzNC4zOTQgNDgyLjQ3N0M2NDEuNDQgNDc2LjMwOSA2NDEuOTkxIDQ2NS4zNzEgNjM1LjM3IDQ1OC43NUw2MTMuMjQ1IDQzNi42MjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMwMy45NzUgMzg0SDU3NS45NzJDNTkzLjQ0OSAzODQgNjA3Ljk0NSAzNjkuODM2IDYwNy45NzIgMzUyLjM1OUM2MDguMTY3IDIyOC40NDUgNTA3Ljg0NCAxMjggMzgzLjk3NCAxMjhIMTExLjk3N0w2OC43MjcgNzAuMzc1QzY1LjcxNiA2Ni4zNTkgNjAuOTkzIDY0IDU1Ljk3MyA2NEgxNS45NzhDNS42MDMgNjQgLTIuMDIyIDczLjc1IDAuNDc4IDgzLjg3NUwzMS45NzggMTkyTDE5MS45NzYgMjU2TDI3OC4zNSAzNzEuMjVDMjg0LjQ3NSAzNzkuMjUgMjkzLjg1IDM4NCAzMDMuOTc1IDM4NFpNNDE1Ljk3NCAxOTUuNUM0NzguNDczIDIwOC4yNSA1MjcuOTczIDI1Ny41IDU0MC43MjMgMzIwSDQxNS45NzRWMTk1LjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 32C128 14.328 142.328 0 160 0H543.996C561.668 0 575.996 14.328 575.996 32S561.668 64 543.996 64H383.998V128H319.998V64H160C142.328 64 128 49.672 128 32ZM613.245 436.625C606.995 430.375 596.996 430.5 590.621 436.625C583.496 443.375 576.746 447.875 565.996 447.875H272.124C245.546 447.875 223.999 469.422 223.999 496C223.999 504.797 231.202 512 239.999 512H565.996C580.875 512 601.257 511.5 634.394 482.477C641.44 476.309 641.991 465.371 635.37 458.75L613.245 436.625Z" />
            <path d="M303.975 384H575.972C593.449 384 607.945 369.836 607.972 352.359C608.167 228.445 507.844 128 383.974 128H111.977L68.727 70.375C65.716 66.359 60.993 64 55.973 64H15.978C5.603 64 -2.022 73.75 0.478 83.875L31.978 192L191.976 256L278.35 371.25C284.475 379.25 293.85 384 303.975 384ZM415.974 195.5C478.473 208.25 527.973 257.5 540.723 320H415.974V195.5Z" />
    </Icon>
);

export default Helicopter;