
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `litecoin-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/litecoin-sign?s=solid litecoin-sign}
 * @preview ![litecoin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQuMDAxIDQ0MEMzODQuMDAxIDQ2Mi4wOTIgMzY2LjA5MyA0ODAgMzQ0LjAwMSA0ODBIMTA0LjAwNUM4MS45MTMgNDgwIDY0LjAwNSA0NjIuMDkyIDY0LjAwNSA0NDBWMjgwLjEzN0w0MC44MDQgMjg2Ljc2NkMzNy44NjYgMjg3LjYwOSAzNC44OTcgMjg4LjAxNiAzMS45OTEgMjg4LjAxNkMxOC4wNjkgMjg4LjAxNiA1LjI1NyAyNzguODQ0IDEuMjQxIDI2NC43OTdDLTMuNjE4IDI0Ny43OTcgNi4yMjUgMjMwLjA5NCAyMy4yMSAyMjUuMjM0TDY0LjAwNSAyMTMuNTc4VjcyQzY0LjAwNSA0OS45MDYgODEuOTExIDMyIDEwNC4wMDUgMzJDMTI2LjA5NiAzMiAxNDQuMDAzIDQ5LjkwNiAxNDQuMDAzIDcyVjE5MC43MjFMMjQ3LjIwMiAxNjEuMjM0QzI2NC4yMzMgMTU2LjMyOCAyODEuOTA1IDE2Ni4yMTkgMjg2Ljc2NCAxODMuMjAzQzI5MS42MjQgMjAwLjIwMyAyODEuNzggMjE3LjkwNiAyNjQuNzk2IDIyMi43NjZMMTQ0LjAwMyAyNTcuMjc5VjQwMEgzNDQuMDAxQzM2Ni4wOTMgNDAwIDM4NC4wMDEgNDE3LjkwOCAzODQuMDAxIDQ0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LitecoinSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384.001 440C384.001 462.092 366.093 480 344.001 480H104.005C81.913 480 64.005 462.092 64.005 440V280.137L40.804 286.766C37.866 287.609 34.897 288.016 31.991 288.016C18.069 288.016 5.257 278.844 1.241 264.797C-3.618 247.797 6.225 230.094 23.21 225.234L64.005 213.578V72C64.005 49.906 81.911 32 104.005 32C126.096 32 144.003 49.906 144.003 72V190.721L247.202 161.234C264.233 156.328 281.905 166.219 286.764 183.203C291.624 200.203 281.78 217.906 264.796 222.766L144.003 257.279V400H344.001C366.093 400 384.001 417.908 384.001 440Z" />
        </Icon>
    </>
}