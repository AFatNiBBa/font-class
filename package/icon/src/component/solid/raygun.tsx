
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `raygun` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=solid raygun}
 * @preview ![raygun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzEuOTczSDMwNEMyOTUuMjUgMzEuOTczIDI4OCAzOS4xMDIgMjg4IDQ3Ljk3N1Y3NS4xOTlDMjczLjQwMiA2OC4yMzEgMjU3LjI1NCA2NC4wMDggMjQwIDY0LjAwOEgxOTEuMDU3TDg4LjIzMiAyLjMxM0M3Ny41NjggLTQuMDg2IDY0IDMuNTk0IDY0IDE2LjAzMVY3NS4xOTVDMjYuMjY0IDkzLjIxMSAwIDEzMS40MDYgMCAxNzYuMDA4QzAgMjM1LjI2NiA0Ni4xNyAyODMuMjc4IDEwNC40MjQgMjg3LjI0MkwzMy45MzkgNDA4LjAyNEMyNy41NjQgNDE5LjAyNCAyNS44MTQgNDMyLjE0OSAyOS4xODkgNDQ0LjQwM0MzMi40MzkgNDU2Ljc4MSA0MC41NjQgNDY3LjI4MSA1MS41NjQgNDczLjUzMUwxMDYuOTM5IDUwNS41MzVDMTE4LjA2NCA1MTEuOTEgMTMxLjA2NCA1MTMuNjYgMTQzLjQzOSA1MTAuNDFDMTU1LjY4OSA1MDcuMDM1IDE2Ni4xODkgNDk5LjAzMSAxNzIuNTY0IDQ4OC4wMzFMMjg4IDI4OC4wMDhWMzA0LjAwOEMyODggMzEyLjc1OCAyOTUuMjUgMzIwLjAwOCAzMDQgMzIwLjAwOEgzMjBDMzI4Ljc1IDMyMC4wMDggMzM1Ljg3NSAzMTMuMDA4IDMzNiAzMDQuMjU4VjQ3LjcyN0MzMzUuODc1IDM4Ljk3NyAzMjguNzUgMzEuOTczIDMyMCAzMS45NzNaTTExMiAyMDBDOTguNzUgMjAwIDg4IDE4OS4yNDYgODggMTc1Ljk5NkM4OCAxNjIuNzQyIDk4Ljc1IDE1MS45OTIgMTEyIDE1MS45OTJTMTM2IDE2Mi43NDIgMTM2IDE3NS45OTZDMTM2IDE4OS4yNDYgMTI1LjI1IDIwMCAxMTIgMjAwWk0yMDggMjAwQzE5NC43NSAyMDAgMTg0IDE4OS4yNDYgMTg0IDE3NS45OTZDMTg0IDE2Mi43NDIgMTk0Ljc1IDE1MS45OTIgMjA4IDE1MS45OTJTMjMyIDE2Mi43NDIgMjMyIDE3NS45OTZDMjMyIDE4OS4yNDYgMjIxLjI1IDIwMCAyMDggMjAwWk01NjkuMzc1IDExOS40MzhDNTY1LjEyNSAxMTYuNDM4IDU1OS44NzUgMTE1LjU2MyA1NTUgMTE3LjE4OEg1NTQuODc1TDQ4MCAxNDIuMTkySDQxNlY3OS45NzdDNDE2IDcxLjEwMiA0MDguODc1IDYzLjk3NyA0MDAgNjMuOTc3SDM4NEMzNzUuMjUgNjMuOTc3IDM2OCA3MS4xMDIgMzY4IDc5Ljk3N1YyNzJDMzY4IDI4MC43NTQgMzc1LjI1IDI4OC4wMDQgMzg0IDI4OC4wMDRINDAwQzQwOC44NzUgMjg4LjAwNCA0MTYgMjgwLjc1NCA0MTYgMjcyVjIwNi4xOTlINDgwLjEyNUw1NTQuODc1IDIzMS4yMDNDNTU5Ljc1IDIzMi44MjggNTY1LjEyNSAyMzEuOTUzIDU2OS4zNzUgMjI4Ljk1M0M1NzMuNSAyMjUuOTUzIDU3NiAyMjEuMDc4IDU3NiAyMTUuOTUzVjEzMi40MzhDNTc2IDEyNy4xODggNTczLjUgMTIyLjQzOCA1NjkuMzc1IDExOS40MzhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Raygun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M320 31.973H304C295.25 31.973 288 39.102 288 47.977V75.199C273.402 68.231 257.254 64.008 240 64.008H191.057L88.232 2.313C77.568 -4.086 64 3.594 64 16.031V75.195C26.264 93.211 0 131.406 0 176.008C0 235.266 46.17 283.278 104.424 287.242L33.939 408.024C27.564 419.024 25.814 432.149 29.189 444.403C32.439 456.781 40.564 467.281 51.564 473.531L106.939 505.535C118.064 511.91 131.064 513.66 143.439 510.41C155.689 507.035 166.189 499.031 172.564 488.031L288 288.008V304.008C288 312.758 295.25 320.008 304 320.008H320C328.75 320.008 335.875 313.008 336 304.258V47.727C335.875 38.977 328.75 31.973 320 31.973ZM112 200C98.75 200 88 189.246 88 175.996C88 162.742 98.75 151.992 112 151.992S136 162.742 136 175.996C136 189.246 125.25 200 112 200ZM208 200C194.75 200 184 189.246 184 175.996C184 162.742 194.75 151.992 208 151.992S232 162.742 232 175.996C232 189.246 221.25 200 208 200ZM569.375 119.438C565.125 116.438 559.875 115.563 555 117.188H554.875L480 142.192H416V79.977C416 71.102 408.875 63.977 400 63.977H384C375.25 63.977 368 71.102 368 79.977V272C368 280.754 375.25 288.004 384 288.004H400C408.875 288.004 416 280.754 416 272V206.199H480.125L554.875 231.203C559.75 232.828 565.125 231.953 569.375 228.953C573.5 225.953 576 221.078 576 215.953V132.438C576 127.188 573.5 122.438 569.375 119.438Z" />
        </Icon>
    </>
}