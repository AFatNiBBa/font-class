
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chalkboard` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=duotone chalkboard}
 * @preview ![chalkboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MCA0MTZINTQ0VjcyQzU0NCA1MCA1MjYgMzIgNTA0IDMySDcyQzQ5Ljk5OSAzMiAzMiA1MCAzMiA3MlY0MTZIMTZDNy4xNjQgNDE2IDAgNDIzLjE2MiAwIDQzMlY0NjRDMCA0NzIuODM2IDcuMTY0IDQ4MCAxNiA0ODBINTYwQzU2OC44MzYgNDgwIDU3NiA0NzIuODM2IDU3NiA0NjRWNDMyQzU3NiA0MjMuMTYyIDU2OC44MzYgNDE2IDU2MCA0MTZaTTk2IDQxNlY5Nkg0ODBWNDE2SDk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00ODAgOTZWNDE2SDQxNlYzNjhDNDE2IDM1OS4xNjIgNDA4LjgzNiAzNTIgNDAwIDM1MkgyNDBDMjMxLjE2NCAzNTIgMjI0IDM1OS4xNjIgMjI0IDM2OFY0MTZIOTZWOTZINDgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Chalkboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M560 416H544V72C544 50 526 32 504 32H72C49.999 32 32 50 32 72V416H16C7.164 416 0 423.162 0 432V464C0 472.836 7.164 480 16 480H560C568.836 480 576 472.836 576 464V432C576 423.162 568.836 416 560 416ZM96 416V96H480V416H96Z" />
            <path d="M480 96V416H416V368C416 359.162 408.836 352 400 352H240C231.164 352 224 359.162 224 368V416H96V96H480Z" />
        </Icon>
    </>
}