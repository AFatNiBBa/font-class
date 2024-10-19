
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skull` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=duotone skull}
 * @preview ![skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAwQzExNC41OTQgMCAwIDEwMC4zMTIgMCAyMjRDMCAyOTQuMDk0IDM2LjkwNiAzNTYuNTk0IDk0LjUgMzk3LjY4OEMxMDQuMDk0IDQwNC41OTQgMTA5LjY4OCA0MTUuODEyIDEwOCA0MjcuNTk0TDk2LjE3MiA0OTMuODEyQzk0Ljc2NiA1MDMuNDA2IDEwMi4xNzIgNTEyIDExMS44OTEgNTEySDE5MlY0NTZDMTkyIDQ1MS41OTQgMTk1LjU5NCA0NDggMjAwIDQ0OEgyMTZDMjIwLjQwNiA0NDggMjI0IDQ1MS41OTQgMjI0IDQ1NlY1MTJIMjg4VjQ1NkMyODggNDUxLjU5NCAyOTEuNTk0IDQ0OCAyOTYgNDQ4SDMxMkMzMTYuNDA2IDQ0OCAzMjAgNDUxLjU5NCAzMjAgNDU2VjUxMkg0MDAuMTA5QzQwOS44MjggNTEyIDQxNy4yMzQgNTAzLjQwNiA0MTUuODI4IDQ5My44MTJMNDA0IDQyNy41OTRDNDAyLjMxMiA0MTUuOTA2IDQwNy44MTIgNDA0LjU5NCA0MTcuNSAzOTcuNjg4QzQ3NS4wOTQgMzU2LjU5NCA1MTIgMjk0LjA5NCA1MTIgMjI0QzUxMiAxMDAuMzEyIDM5Ny40MDYgMCAyNTYgMFpNMTYwIDMyMEMxMjQuNjg4IDMyMCA5NiAyOTEuMzEyIDk2IDI1NlMxMjQuNjg4IDE5MiAxNjAgMTkyUzIyNCAyMjAuNjg4IDIyNCAyNTZTMTk1LjMxMiAzMjAgMTYwIDMyMFpNMzUyIDMyMEMzMTYuNjg4IDMyMCAyODggMjkxLjMxMiAyODggMjU2UzMxNi42ODggMTkyIDM1MiAxOTJTNDE2IDIyMC42ODggNDE2IDI1NlMzODcuMzEyIDMyMCAzNTIgMzIwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNjAgMTkyQzEyNC42ODggMTkyIDk2IDIyMC42ODggOTYgMjU2UzEyNC42ODggMzIwIDE2MCAzMjBTMjI0IDI5MS4zMTIgMjI0IDI1NlMxOTUuMzEyIDE5MiAxNjAgMTkyWk0zNTIgMTkyQzMxNi42ODggMTkyIDI4OCAyMjAuNjg4IDI4OCAyNTZTMzE2LjY4OCAzMjAgMzUyIDMyMFM0MTYgMjkxLjMxMiA0MTYgMjU2UzM4Ny4zMTIgMTkyIDM1MiAxOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0C114.594 0 0 100.312 0 224C0 294.094 36.906 356.594 94.5 397.688C104.094 404.594 109.688 415.812 108 427.594L96.172 493.812C94.766 503.406 102.172 512 111.891 512H192V456C192 451.594 195.594 448 200 448H216C220.406 448 224 451.594 224 456V512H288V456C288 451.594 291.594 448 296 448H312C316.406 448 320 451.594 320 456V512H400.109C409.828 512 417.234 503.406 415.828 493.812L404 427.594C402.312 415.906 407.812 404.594 417.5 397.688C475.094 356.594 512 294.094 512 224C512 100.312 397.406 0 256 0ZM160 320C124.688 320 96 291.312 96 256S124.688 192 160 192S224 220.688 224 256S195.312 320 160 320ZM352 320C316.688 320 288 291.312 288 256S316.688 192 352 192S416 220.688 416 256S387.312 320 352 320Z" />
            <path d="M160 192C124.688 192 96 220.688 96 256S124.688 320 160 320S224 291.312 224 256S195.312 192 160 192ZM352 192C316.688 192 288 220.688 288 256S316.688 320 352 320S416 291.312 416 256S387.312 192 352 192Z" />
    </Icon>
);

export default Skull;