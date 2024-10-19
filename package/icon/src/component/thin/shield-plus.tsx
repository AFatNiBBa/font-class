
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shield-plus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-plus?s=thin shield-plus}
 * @preview ![shield-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgMjMySDI2NFYxNTJDMjY0IDE0Ny41NzggMjYwLjQwNiAxNDQgMjU2IDE0NFMyNDggMTQ3LjU3OCAyNDggMTUyVjIzMkgxNjhDMTYzLjU5NCAyMzIgMTYwIDIzNS41NzggMTYwIDI0MFMxNjMuNTk0IDI0OCAxNjggMjQ4SDI0OFYzMjhDMjQ4IDMzMi40MjIgMjUxLjU5NCAzMzYgMjU2IDMzNlMyNjQgMzMyLjQyMiAyNjQgMzI4VjI0OEgzNDRDMzQ4LjQwNiAyNDggMzUyIDI0NC40MjIgMzUyIDI0MFMzNDguNDA2IDIzMiAzNDQgMjMyWk00NjYuNSA4My42OEwyNzQuNSAzLjY3MkMyNjkuNjI1IDEuNjQxIDI2MS4zNDQgMCAyNTYuMDYyIDBDMjUwLjc1IDAgMjQyLjUgMS42NDEgMjM3LjU5NCAzLjY3Mkw0NS41OTQgODMuNjhDMjcuNjg4IDkxLjA3IDE2IDEwOC41NzQgMTYgMTI3Ljk4NEMxNiAzODUuMTU3IDIwNS4xNjQgNTEyIDI1NS45NTMgNTEyQzMwNy45NzUgNTEyIDQ5NiAzODMuODEzIDQ5NiAxMjcuOTg0QzQ5NiAxMDguNTc0IDQ4NC4zMTIgOTEuMDcgNDY2LjUgODMuNjhaTTI1NS45NTMgNDk2QzIxMi4xMDcgNDk2IDMyIDM3NC4wMTIgMzIgMTI3Ljk4NEMzMiAxMTQuOTkyIDM5LjczMiAxMDMuNDEgNTEuNzQ4IDk4LjQ0OUwyNDMuNzE1IDE4LjQ1M0MyNDYuNzA3IDE3LjIxNSAyNTIuODIyIDE2IDI1Ni4wNjIgMTZDMjU5LjI0NiAxNiAyNjUuNDQzIDE3LjIzNCAyNjguMzQ2IDE4LjQ0MUw0NjAuMzY3IDk4LjQ2MUM0NzIuMjk1IDEwMy40MDYgNDgwIDExNC45OTYgNDgwIDEyNy45ODRDNDgwIDQwNS41ODggMjcwLjkyMyA0OTYgMjU1Ljk1MyA0OTZaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShieldPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M344 232H264V152C264 147.578 260.406 144 256 144S248 147.578 248 152V232H168C163.594 232 160 235.578 160 240S163.594 248 168 248H248V328C248 332.422 251.594 336 256 336S264 332.422 264 328V248H344C348.406 248 352 244.422 352 240S348.406 232 344 232ZM466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.07 16 108.574 16 127.984C16 385.157 205.164 512 255.953 512C307.975 512 496 383.813 496 127.984C496 108.574 484.312 91.07 466.5 83.68ZM255.953 496C212.107 496 32 374.012 32 127.984C32 114.992 39.732 103.41 51.748 98.449L243.715 18.453C246.707 17.215 252.822 16 256.062 16C259.246 16 265.443 17.234 268.346 18.441L460.367 98.461C472.295 103.406 480 114.996 480 127.984C480 405.588 270.923 496 255.953 496Z " />
        </Icon>
    </>
}