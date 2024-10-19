
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-sun` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-sun?s=regular temperature-sun}
 * @preview ![temperature-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTIuMjE5IDI3OC41VjExMkM2MTIuMjE5IDUwLjEyNSA1NjIuMDk0IDAgNTAwLjIxOSAwUzM4OC4yMTkgNTAuMTI1IDM4OC4yMTkgMTEyVjI3OC41QzM2OC40NjkgMzAzLjEyNSAzNTYuMjE5IDMzNCAzNTYuMjE5IDM2OEMzNTYuMjE5IDQ0Ny41IDQyMC43MTkgNTEyIDUwMC4yMTkgNTEyUzY0NC4yMTkgNDQ3LjUgNjQ0LjIxOSAzNjhDNjQ0LjIxOSAzMzQgNjMxLjk2OSAzMDMuMTI1IDYxMi4yMTkgMjc4LjVaTTUwMC4yMTkgNDY0QzQ0Ny4zNDQgNDY0IDQwNC4yMTkgNDIwLjg3NSA0MDQuMjE5IDM2OEM0MDQuMjE5IDM0MSA0MTUuOTY5IDMyMC43NSA0MjUuNzE5IDMwOC41TDQzNi4yMTkgMjk1LjM3NVYxMTJDNDM2LjIxOSA3Ni43NSA0NjQuOTY5IDQ4IDUwMC4yMTkgNDhTNTY0LjIxOSA3Ni43NSA1NjQuMjE5IDExMlYyOTUuMjVMNTc0LjcxOSAzMDguMzc1QzU4NC40NjkgMzIwLjc1IDU5Ni4yMTkgMzQxIDU5Ni4yMTkgMzY4QzU5Ni4yMTkgNDIwLjg3NSA1NTMuMDk0IDQ2NCA1MDAuMjE5IDQ2NFpNMjI4LjE5OSAxNjBDMTkyLjk0NyAxNjAgMTY0LjE5NSAxODguNzUgMTY0LjE5NSAyMjRTMTkyLjk0NyAyODggMjI4LjE5OSAyODhDMjYzLjQ0OSAyODggMjkyLjIwMSAyNTkuMjUgMjkyLjIwMSAyMjRTMjYzLjQ0OSAxNjAgMjI4LjE5OSAxNjBaTTI4My4yMDEgOTEuMjVMMjQxLjgyNCA4LjM3NUMyMzYuMTk5IC0yLjc1IDIyMC4xOTcgLTIuNzUgMjE0LjU3MiA4LjM3NUwxNzMuMTk1IDkxLjI1TDg1LjMxNiA2MS44NzVDNzMuNDQxIDU4IDYyLjE4OSA2OS4yNSA2Ni4wNjYgODEuMTI1TDk1LjQ0MSAxNjlMMTIuNTYyIDIxMC4zNzVDMS40MzcgMjE2IDEuNDM3IDIzMS44NzUgMTIuNTYyIDIzNy41TDk1LjQ0MSAyNzlMNjYuMDY2IDM2Ni44NzVDNjIuMDY0IDM3OC43NSA3My40NDEgMzkwIDg1LjMxNiAzODYuMTI1TDE3My4xOTUgMzU2Ljc1TDIxNC41NzIgNDM5LjYyNUMyMjAuMTk3IDQ1MC43NSAyMzYuMTk5IDQ1MC43NSAyNDEuNjk5IDQzOS42MjVMMjgzLjA3NiAzNTYuNzVMMzI0LjIwMyAzNzAuMzc1QzMyNC4yMDMgMzY5LjYyNSAzMjQuMDc4IDM2OC43NSAzMjQuMDc4IDM2Ny44NzVDMzI0LjIwMyAzMzIuMTI1IDMzNS4yMDMgMjk3Ljc1IDM1Ni4yMDUgMjY3Ljg3NVYxMTJDMzU2LjIwNSA5NS4xMjUgMzU5LjcwNSA3OSAzNjUuMDggNjMuODc1TDI4My4yMDEgOTEuMjVaTTI5Ni4wNzYgMjkxLjg3NUMyNTguNjk5IDMyOS4yNSAxOTcuODIyIDMyOS4yNSAxNjAuMzIgMjkxLjg3NVMxMjIuOTQzIDE5My41IDE2MC4zMiAxNTYuMTI1UzI1OC41NzQgMTE4Ljc1IDI5Ni4wNzYgMTU2LjEyNUMzMzMuNDUzIDE5My41IDMzMy40NTMgMjU0LjUgMjk2LjA3NiAyOTEuODc1Wk01MTYuMjE5IDMyMi44NzVWMTEyQzUxNi4yMTkgMTAzLjI1IDUwOC45NjkgOTYgNTAwLjIxOSA5NlM0ODQuMjE5IDEwMy4yNSA0ODQuMjE5IDExMlYzMjIuODc1QzQ2NS41OTQgMzI5LjUgNDUyLjIxOSAzNDcuMTI1IDQ1Mi4yMTkgMzY4QzQ1Mi4yMTkgMzk0LjUgNDczLjcxOSA0MTYgNTAwLjIxOSA0MTZTNTQ4LjIxOSAzOTQuNSA1NDguMjE5IDM2OEM1NDguMjE5IDM0Ny4xMjUgNTM0Ljg0NCAzMjkuNSA1MTYuMjE5IDMyMi44NzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TemperatureSun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M612.219 278.5V112C612.219 50.125 562.094 0 500.219 0S388.219 50.125 388.219 112V278.5C368.469 303.125 356.219 334 356.219 368C356.219 447.5 420.719 512 500.219 512S644.219 447.5 644.219 368C644.219 334 631.969 303.125 612.219 278.5ZM500.219 464C447.344 464 404.219 420.875 404.219 368C404.219 341 415.969 320.75 425.719 308.5L436.219 295.375V112C436.219 76.75 464.969 48 500.219 48S564.219 76.75 564.219 112V295.25L574.719 308.375C584.469 320.75 596.219 341 596.219 368C596.219 420.875 553.094 464 500.219 464ZM228.199 160C192.947 160 164.195 188.75 164.195 224S192.947 288 228.199 288C263.449 288 292.201 259.25 292.201 224S263.449 160 228.199 160ZM283.201 91.25L241.824 8.375C236.199 -2.75 220.197 -2.75 214.572 8.375L173.195 91.25L85.316 61.875C73.441 58 62.189 69.25 66.066 81.125L95.441 169L12.562 210.375C1.437 216 1.437 231.875 12.562 237.5L95.441 279L66.066 366.875C62.064 378.75 73.441 390 85.316 386.125L173.195 356.75L214.572 439.625C220.197 450.75 236.199 450.75 241.699 439.625L283.076 356.75L324.203 370.375C324.203 369.625 324.078 368.75 324.078 367.875C324.203 332.125 335.203 297.75 356.205 267.875V112C356.205 95.125 359.705 79 365.08 63.875L283.201 91.25ZM296.076 291.875C258.699 329.25 197.822 329.25 160.32 291.875S122.943 193.5 160.32 156.125S258.574 118.75 296.076 156.125C333.453 193.5 333.453 254.5 296.076 291.875ZM516.219 322.875V112C516.219 103.25 508.969 96 500.219 96S484.219 103.25 484.219 112V322.875C465.594 329.5 452.219 347.125 452.219 368C452.219 394.5 473.719 416 500.219 416S548.219 394.5 548.219 368C548.219 347.125 534.844 329.5 516.219 322.875Z" />
        </Icon>
    </>
}