
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shower-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shower-down?s=regular shower-down}
 * @preview ![shower-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgMjA4SDM1MlYxOTJDMzUyIDExMiAyOTIuNzg3IDQ2LjExOSAyMTYgMzQuNDI2VjI0QzIxNiAxMC43NDQgMjA1LjI1NCAwIDE5MiAwUzE2OCAxMC43NDQgMTY4IDI0VjM0LjQyNkM5MS4yMTMgNDYuMTE5IDMyIDExMiAzMiAxOTJWMjA4SDI0QzEwLjc0NiAyMDggMCAyMTguNzQ0IDAgMjMyQzAgMjQ1LjI1NCAxMC43NDYgMjU2IDI0IDI1NkgzNjBDMzczLjI1NCAyNTYgMzg0IDI0NS4yNTQgMzg0IDIzMkMzODQgMjE4Ljc0NCAzNzMuMjU0IDIwOCAzNjAgMjA4Wk0zMDQgMjA4SDgwVjE5MkM4MCAxMzAuMjUgMTMwLjI1IDgwIDE5MiA4MFMzMDQgMTMwLjI1IDMwNCAxOTJWMjA4Wk02OS4yNjIgMjkwLjg3OUM2Ni44ODcgMjg3LjE3NiA2MS4xMTMgMjg3LjE3NiA1OC43MzggMjkwLjg3OUM1NC4yNzUgMjk3LjgzIDMyIDMzMy4yNSAzMiAzNDkuNzU0QzMyIDM2OC42OTkgNDYuMzUgMzg0LjEwMiA2NCAzODQuMTAyUzk2IDM2OC42OTkgOTYgMzQ5Ljc1NEM5NiAzMzMuMjUgNzMuNzI1IDI5Ny44MyA2OS4yNjIgMjkwLjg3OVpNMTk3LjI2MiAyOTAuODc5QzE5NC44ODcgMjg3LjE3NiAxODkuMTEzIDI4Ny4xNzYgMTg2LjczOCAyOTAuODc5QzE4Mi4yNzUgMjk3LjgzIDE2MCAzMzMuMjUgMTYwIDM0OS43NTRDMTYwIDM2OC42OTkgMTc0LjM1IDM4NC4xMDIgMTkyIDM4NC4xMDJTMjI0IDM2OC42OTkgMjI0IDM0OS43NTRDMjI0IDMzMy4yNSAyMDEuNzI1IDI5Ny44MyAxOTcuMjYyIDI5MC44NzlaTTMxNC43MzggMjkwLjg3OUMzMTAuMjc1IDI5Ny44MyAyODggMzMzLjI1IDI4OCAzNDkuNzU0QzI4OCAzNjguNjk5IDMwMi4zNSAzODQuMTAyIDMyMCAzODQuMTAyUzM1MiAzNjguNjk5IDM1MiAzNDkuNzU0QzM1MiAzMzMuMjUgMzI5LjcyNSAyOTcuODMgMzI1LjI2MiAyOTAuODc5QzMyMi44ODcgMjg3LjE3NiAzMTcuMTEzIDI4Ny4xNzYgMzE0LjczOCAyOTAuODc5Wk0yNTAuNzM4IDQxOC43NzdDMjQ2LjI3NSA0MjUuNzI3IDIyNCA0NjEuMTQ4IDIyNCA0NzcuNjUyQzIyNCA0OTYuNTk2IDIzOC4zNSA1MTIgMjU2IDUxMlMyODggNDk2LjU5NiAyODggNDc3LjY1MkMyODggNDYxLjE0OCAyNjUuNzI1IDQyNS43MjcgMjYxLjI2MiA0MTguNzc3QzI1OC44ODcgNDE1LjA3NCAyNTMuMTEzIDQxNS4wNzQgMjUwLjczOCA0MTguNzc3Wk0xMjIuNzM4IDQxOC43NzdDMTE4LjI3NSA0MjUuNzI3IDk2IDQ2MS4xNDggOTYgNDc3LjY1MkM5NiA0OTYuNTk2IDExMC4zNSA1MTIgMTI4IDUxMlMxNjAgNDk2LjU5NiAxNjAgNDc3LjY1MkMxNjAgNDYxLjE0OCAxMzcuNzI1IDQyNS43MjcgMTMzLjI2MiA0MTguNzc3QzEzMC44ODcgNDE1LjA3NCAxMjUuMTEzIDQxNS4wNzQgMTIyLjczOCA0MTguNzc3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShowerDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M360 208H352V192C352 112 292.787 46.119 216 34.426V24C216 10.744 205.254 0 192 0S168 10.744 168 24V34.426C91.213 46.119 32 112 32 192V208H24C10.746 208 0 218.744 0 232C0 245.254 10.746 256 24 256H360C373.254 256 384 245.254 384 232C384 218.744 373.254 208 360 208ZM304 208H80V192C80 130.25 130.25 80 192 80S304 130.25 304 192V208ZM69.262 290.879C66.887 287.176 61.113 287.176 58.738 290.879C54.275 297.83 32 333.25 32 349.754C32 368.699 46.35 384.102 64 384.102S96 368.699 96 349.754C96 333.25 73.725 297.83 69.262 290.879ZM197.262 290.879C194.887 287.176 189.113 287.176 186.738 290.879C182.275 297.83 160 333.25 160 349.754C160 368.699 174.35 384.102 192 384.102S224 368.699 224 349.754C224 333.25 201.725 297.83 197.262 290.879ZM314.738 290.879C310.275 297.83 288 333.25 288 349.754C288 368.699 302.35 384.102 320 384.102S352 368.699 352 349.754C352 333.25 329.725 297.83 325.262 290.879C322.887 287.176 317.113 287.176 314.738 290.879ZM250.738 418.777C246.275 425.727 224 461.148 224 477.652C224 496.596 238.35 512 256 512S288 496.596 288 477.652C288 461.148 265.725 425.727 261.262 418.777C258.887 415.074 253.113 415.074 250.738 418.777ZM122.738 418.777C118.275 425.727 96 461.148 96 477.652C96 496.596 110.35 512 128 512S160 496.596 160 477.652C160 461.148 137.725 425.727 133.262 418.777C130.887 415.074 125.113 415.074 122.738 418.777Z" />
        </Icon>
    </>
}