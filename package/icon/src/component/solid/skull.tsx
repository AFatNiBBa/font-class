
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=solid skull}
 * @preview ![skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMEMxMTQuNTk0IDAgMCAxMDAuMzEyIDAgMjI0QzAgMjk0LjA5NCAzNi45MDYgMzU2LjU5NCA5NC41IDM5Ny42ODhDMTA0LjA5NCA0MDQuNTk0IDEwOS42ODggNDE1LjgxMiAxMDggNDI3LjU5NEw5Ni4xNzIgNDkzLjgxMkM5NC43NjYgNTAzLjQwNiAxMDIuMTcyIDUxMiAxMTEuODkxIDUxMkgxOTJWNDU2QzE5MiA0NTEuNTk0IDE5NS41OTQgNDQ4IDIwMCA0NDhIMjE2QzIyMC40MDYgNDQ4IDIyNCA0NTEuNTk0IDIyNCA0NTZWNTEySDI4OFY0NTZDMjg4IDQ1MS41OTQgMjkxLjU5NCA0NDggMjk2IDQ0OEgzMTJDMzE2LjQwNiA0NDggMzIwIDQ1MS41OTQgMzIwIDQ1NlY1MTJINDAwLjEwOUM0MDkuODI4IDUxMiA0MTcuMjM0IDUwMy40MDYgNDE1LjgyOCA0OTMuODEyTDQwNCA0MjcuNTk0QzQwMi4zMTIgNDE1LjkwNiA0MDcuODEyIDQwNC41OTQgNDE3LjUgMzk3LjY4OEM0NzUuMDk0IDM1Ni41OTQgNTEyIDI5NC4wOTQgNTEyIDIyNEM1MTIgMTAwLjMxMiAzOTcuNDA2IDAgMjU2IDBaTTE2MCAzMjBDMTI0LjY4OCAzMjAgOTYgMjkxLjMxMiA5NiAyNTZTMTI0LjY4OCAxOTIgMTYwIDE5MlMyMjQgMjIwLjY4OCAyMjQgMjU2UzE5NS4zMTIgMzIwIDE2MCAzMjBaTTM1MiAzMjBDMzE2LjY4OCAzMjAgMjg4IDI5MS4zMTIgMjg4IDI1NlMzMTYuNjg4IDE5MiAzNTIgMTkyUzQxNiAyMjAuNjg4IDQxNiAyNTZTMzg3LjMxMiAzMjAgMzUyIDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Skull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 0C114.594 0 0 100.312 0 224C0 294.094 36.906 356.594 94.5 397.688C104.094 404.594 109.688 415.812 108 427.594L96.172 493.812C94.766 503.406 102.172 512 111.891 512H192V456C192 451.594 195.594 448 200 448H216C220.406 448 224 451.594 224 456V512H288V456C288 451.594 291.594 448 296 448H312C316.406 448 320 451.594 320 456V512H400.109C409.828 512 417.234 503.406 415.828 493.812L404 427.594C402.312 415.906 407.812 404.594 417.5 397.688C475.094 356.594 512 294.094 512 224C512 100.312 397.406 0 256 0ZM160 320C124.688 320 96 291.312 96 256S124.688 192 160 192S224 220.688 224 256S195.312 320 160 320ZM352 320C316.688 320 288 291.312 288 256S316.688 192 352 192S416 220.688 416 256S387.312 320 352 320Z" />
        </Icon>
    </>
}