
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `graduation-cap` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/graduation-cap?s=light graduation-cap}
 * @preview ![graduation-cap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTcuNzgxIDEzNi42NzZMMzMxLjQ4NCAzMy45NTNDMzI0LjA0NyAzMS4zMjggMzE1LjkyMiAzMS4zNTkgMzA4LjQ1MyAzMy45ODVMMjIuMjE5IDEzNi42NzZDOC43MTkgMTQxLjUyIDAgMTUzLjgwMSAwIDE2Ny45ODlTOC43MTkgMTk0LjQ1OSAyMi4yMTkgMTk5LjMwM0w0OCAyMDguNTUzVjMyMS42ODJMMTYuNDA2IDQ2MC40MzdDMTUuMzEyIDQ2NS4xODcgMTYuNDUzIDQ3MC4xNTYgMTkuNDg0IDQ3My45NjlTMjcuMTI1IDQ4MCAzMiA0ODBIOTZDMTAwLjg1OSA0ODAgMTA1LjQ1MyA0NzcuNzgxIDEwOC40ODQgNDc0QzExMS41MzEgNDcwLjIxOCAxMTIuNjcyIDQ2NS4yNDkgMTExLjYwOSA0NjAuNDk5TDgwIDMxOS41ODhWMjIwLjAzNEwzMDguNTE2IDMwMi4wMjVDMzEyLjIxOSAzMDMuMzM4IDMxNi4wOTQgMzAzLjk2MyAzMTkuOTg0IDMwMy45NjNDMzIzLjg5MSAzMDMuOTYzIDMyNy43OTcgMzAzLjMwNiAzMzEuNTQ3IDMwMS45OTRMNjE3Ljc4MSAxOTkuMzAzQzYzMS4yODEgMTk0LjQ1OSA2NDAgMTgyLjE3NyA2NDAgMTY3Ljk4OVM2MzEuMjgxIDE0MS41MiA2MTcuNzgxIDEzNi42NzZaTTUyLjA3OCA0NDcuOTk5TDY0LjE3MiAzOTUuMjQ3TDc2LjAxNiA0NDcuOTk5SDUyLjA3OFpNMzE5LjI2NiAyNzEuODY4TDEyOS40ODIgMjAzLjc3OUwzMjQuNzM0IDE0My4yN0MzMzMuMTcyIDE0MC42NDQgMzM3LjkwNiAxMzEuNzA3IDMzNS4yODEgMTIzLjIzOEMzMzIuNjcyIDExNC44MzEgMzIzLjc4MSAxMTAuMDE4IDMxNS4yNjYgMTEyLjcwNkw3OS40IDE4NS44MTJMMzIgMTY4TDMyMC43MzQgNjQuMTExTDYwOCAxNjhMMzE5LjI2NiAyNzEuODY4Wk00ODIuMjgxIDI4OC4xMThDNDczLjUxNiAyODkuMjc1IDQ2Ny4zNDQgMjk3LjMwNiA0NjguNSAzMDYuMDg4TDQ3OS44NTkgMzkyLjcxNkM0ODEuMDE2IDQwMS42MjIgNDc1LjIwMyA0MTAuMzczIDQ2NS4wNjMgNDE1LjA2QzQyMS4xNTYgNDM1LjM3MyAzNzEuNSA0NDYuNzggMzIxLjg3NSA0NDcuOTk5SDMxOC41MTZDMjY4LjUgNDQ2Ljc4IDIxOC44NDQgNDM1LjM3MyAxNzQuOTM4IDQxNS4wNkMxNjQuNzk3IDQxMC4zNzMgMTU4Ljk4NCA0MDEuNjIyIDE2MC4xNDEgMzkyLjc0N0wxNzEuNSAzMDYuMDg4QzE3Mi42NTYgMjk3LjMwNiAxNjYuNDg0IDI4OS4yNzUgMTU3LjcxOSAyODguMTE4QzE0OC44NDQgMjg2LjkzMSAxNDAuOTA2IDI5My4xODEgMTM5Ljc4MSAzMDEuOUwxMjguNDIyIDM4OC41OTFDMTI1LjQwNiA0MTEuNjIzIDEzOC4zOTEgNDMzLjQzNiAxNjEuNSA0NDQuMTI0QzIwOS4zNTkgNDY2LjI1IDI2My4zNzUgNDc4LjY1NiAzMTguMTI1IDQ4MEgzMjIuMjY2QzM3Ni42MjUgNDc4LjY1NiA0MzAuNjQxIDQ2Ni4yNSA0NzguNSA0NDQuMTI0QzUwMS42MDkgNDMzLjQzNiA1MTQuNTk0IDQxMS42MjMgNTExLjU3OCAzODguNTU5TDUwMC4yMTkgMzAxLjlDNDk5LjA3OCAyOTMuMTgxIDQ5MS4wNjIgMjg2LjkzMSA0ODIuMjgxIDI4OC4xMThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GraduationCap(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M617.781 136.676L331.484 33.953C324.047 31.328 315.922 31.359 308.453 33.985L22.219 136.676C8.719 141.52 0 153.801 0 167.989S8.719 194.459 22.219 199.303L48 208.553V321.682L16.406 460.437C15.312 465.187 16.453 470.156 19.484 473.969S27.125 480 32 480H96C100.859 480 105.453 477.781 108.484 474C111.531 470.218 112.672 465.249 111.609 460.499L80 319.588V220.034L308.516 302.025C312.219 303.338 316.094 303.963 319.984 303.963C323.891 303.963 327.797 303.306 331.547 301.994L617.781 199.303C631.281 194.459 640 182.177 640 167.989S631.281 141.52 617.781 136.676ZM52.078 447.999L64.172 395.247L76.016 447.999H52.078ZM319.266 271.868L129.482 203.779L324.734 143.27C333.172 140.644 337.906 131.707 335.281 123.238C332.672 114.831 323.781 110.018 315.266 112.706L79.4 185.812L32 168L320.734 64.111L608 168L319.266 271.868ZM482.281 288.118C473.516 289.275 467.344 297.306 468.5 306.088L479.859 392.716C481.016 401.622 475.203 410.373 465.063 415.06C421.156 435.373 371.5 446.78 321.875 447.999H318.516C268.5 446.78 218.844 435.373 174.938 415.06C164.797 410.373 158.984 401.622 160.141 392.747L171.5 306.088C172.656 297.306 166.484 289.275 157.719 288.118C148.844 286.931 140.906 293.181 139.781 301.9L128.422 388.591C125.406 411.623 138.391 433.436 161.5 444.124C209.359 466.25 263.375 478.656 318.125 480H322.266C376.625 478.656 430.641 466.25 478.5 444.124C501.609 433.436 514.594 411.623 511.578 388.559L500.219 301.9C499.078 293.181 491.062 286.931 482.281 288.118Z" />
        </Icon>
    </>
}