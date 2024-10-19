
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `claw-marks` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/claw-marks?s=thin claw-marks}
 * @preview ![claw-marks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDguOTY4IDI3LjMxMUMyNTMuNDk5IDMxLjg0MiAyNTUuOTk5IDM3Ljg3MyAyNTUuOTk5IDQ0LjI3OVY5Ni4wMjhIMzA3Ljc0OUMzMTQuMTU1IDk2LjAyOCAzMjAuMTg2IDk4LjUyOCAzMjQuNzE4IDEwMy4wNTlMMzc2Ljk2NyAxNTUuMzA3QzM4MS40OTkgMTU5LjgzOCAzODMuOTk5IDE2NS44NjkgMzgzLjk5OSAxNzIuMjc1VjIyNC4wMjRINDM1Ljc0OEM0NDIuMTU1IDIyNC4wMjQgNDQ4LjE4NiAyMjYuNTI0IDQ1Mi4yNDggMjMwLjUyNEw0OTcuODczIDI4NS4xMzJDNDk5LjQzNSAyODcuMDIyIDUwMS43MTcgMjg4LjAwNiA1MDMuOTk4IDI4OC4wMDZDNTA5LjMyOSAyODguMDA2IDUxMS45OTggMjgzLjQ1NCA1MTEuOTk4IDI4MC4wMjJDNTExLjk5OCAyNzguMjA4IDUxMS4zODIgMjc2LjM4MyA1MTAuMTIzIDI3NC44ODJMNDY0LjAyOSAyMTkuNzQzQzQ1Ni40NjcgMjEyLjE4MSA0NDYuNDM2IDIwOC4wMjQgNDM1Ljc0OCAyMDguMDI0SDM5OS45OTlWMTcyLjI3NUMzOTkuOTk5IDE2MS41ODggMzk1Ljg0MiAxNTEuNTU3IDM4OC4yOCAxNDMuOTk1TDMzNi4wMyA5MS43NDdDMzI4LjQ2OCA4NC4xODQgMzE4LjQzNiA4MC4wMjggMzA3Ljc0OSA4MC4wMjhIMjcxLjk5OVY0NC4yNzlDMjcxLjk5OSAzMy41OTIgMjY3Ljg0MyAyMy41NjEgMjU4Ljc0OSAxNC44MTFMMjM2LjEyNCAxLjE3MUMyMzQuODI3IDAuMzc4IDIzMy4zOTQgMCAyMzEuOTggMEMyMjUuNDQgMCAyMjQuMDA2IDYuMTI4IDIyNC4wMDYgOC4wMDhDMjI0LjAwNiAxMC43MTYgMjI1LjM4NSAxMy4zNTYgMjI3Ljg3NCAxNC44NThMMjQ4Ljk2OCAyNy4zMTFaTTUxMiA1MDMuOTc4QzUxMiA1MDEuOTkgNTExLjI2NCA0OTkuOTk5IDUwOS43NzkgNDk4LjQ1NEw0MjYuNTMgNDExLjczN0M0MTguOTY3IDQwNC4xNzUgNDA4LjkzNiA0MDAuMDE5IDM5OC4yNDkgNDAwLjAxOUgzNjcuOTk5VjM2OS43N0MzNjcuOTk5IDM1OS4wODMgMzYzLjg0MiAzNDkuMDUyIDM1Ni4yOCAzNDEuNDg5TDI2Ni41MyAyNTEuNzQyQzI1OC45NjggMjQ0LjE4IDI0OC45MzcgMjQwLjAyMyAyMzguMjQ5IDI0MC4wMjNIMjA4VjIwOS43NzRDMjA4IDE5OS4wODcgMjAzLjg0MyAxODkuMDU2IDE5Ni4yMTggMTgxLjQzMUwxMy41OTQgMi4yOTZDMTIuMDMyIDAuNzggMTAuMDAzIDAuMDE4IDcuOTc2IDAuMDE4QzIuMjUzIDAuMDE4IDAgNS4wOTkgMCA3Ljk5NUMwIDEwLjA3NCAwLjgwNSAxMi4xNTUgMi40MDcgMTMuNzMzTDE4NC45NjggMTkyLjgwNkMxODkuNSAxOTcuMzM3IDE5MiAyMDMuMzY4IDE5MiAyMDkuNzc0VjI1Ni4wMjNIMjM4LjI0OUMyNDQuNjU2IDI1Ni4wMjMgMjUwLjY4NyAyNTguNTIzIDI1NS4yMTggMjYzLjA1NEwzNDQuOTY4IDM1Mi44MDFDMzQ5LjQ5OSAzNTcuMzMzIDM1MS45OTkgMzYzLjM2NCAzNTEuOTk5IDM2OS43N1Y0MTYuMDE4SDM5OC4yNDlDNDA0LjY1NSA0MTYuMDE4IDQxMC42ODYgNDE4LjUxOCA0MTUuMDkyIDQyMi45NEw0OTguMjE3IDUwOS41NDdDNDk5LjgxIDUxMS4xNzIgNTAxLjkwNCA1MTIgNTAzLjk5OCA1MTJDNTA5LjAyNyA1MTIgNTEyIDUwNy43NDcgNTEyIDUwMy45NzhaTTE3Ni4wMzEgMzc5LjczOEMxNjguNDY4IDM3Mi4xNzYgMTU4LjQzNyAzNjguMDIgMTQ3Ljc1IDM2OC4wMkgxMTJWMzMyLjI3MUMxMTIgMzIxLjU4NCAxMDcuODQ0IDMxMS41NTMgOTkuOTY5IDMwMy42OTRMMTMuMzQ0IDIyNi4wNTVDMTEuODMxIDIyNC42ODggOS45MjUgMjI0LjAxMSA4LjAxOCAyMjQuMDExQzMuNjM5IDIyNC4wMTEgMCAyMjcuNTA5IDAgMjMyLjAwMUMwIDIzNC4xOTkgMC44OTcgMjM2LjM4NSAyLjY1NyAyMzcuOTYxTDg4Ljk2OSAzMTUuMzAzQzkzLjUgMzE5LjgzNCA5NiAzMjUuODY1IDk2IDMzMi4yNzFWMzg0LjAxOUgxNDcuNzVDMTU0LjE1NiAzODQuMDE5IDE2MC4xODcgMzg2LjUxOSAxNjQuNSAzOTAuODMyTDI3NC4xMjQgNTA5LjQzOEMyNzUuNjg3IDUxMS4xNDEgMjc3Ljg0MyA1MTIgMjc5Ljk5OSA1MTJDMjg0LjQyIDUxMiAyODguMDA1IDUwOC40MyAyODguMDA1IDUwNC4wMDZDMjg4LjAwNSA1MDIuMDU5IDI4Ny4yOTkgNTAwLjEwNyAyODUuODc0IDQ5OC41NjNMMTc2LjAzMSAzNzkuNzM4WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function ClawMarks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M248.968 27.311C253.499 31.842 255.999 37.873 255.999 44.279V96.028H307.749C314.155 96.028 320.186 98.528 324.718 103.059L376.967 155.307C381.499 159.838 383.999 165.869 383.999 172.275V224.024H435.748C442.155 224.024 448.186 226.524 452.248 230.524L497.873 285.132C499.435 287.022 501.717 288.006 503.998 288.006C509.329 288.006 511.998 283.454 511.998 280.022C511.998 278.208 511.382 276.383 510.123 274.882L464.029 219.743C456.467 212.181 446.436 208.024 435.748 208.024H399.999V172.275C399.999 161.588 395.842 151.557 388.28 143.995L336.03 91.747C328.468 84.184 318.436 80.028 307.749 80.028H271.999V44.279C271.999 33.592 267.843 23.561 258.749 14.811L236.124 1.171C234.827 0.378 233.394 0 231.98 0C225.44 0 224.006 6.128 224.006 8.008C224.006 10.716 225.385 13.356 227.874 14.858L248.968 27.311ZM512 503.978C512 501.99 511.264 499.999 509.779 498.454L426.53 411.737C418.967 404.175 408.936 400.019 398.249 400.019H367.999V369.77C367.999 359.083 363.842 349.052 356.28 341.489L266.53 251.742C258.968 244.18 248.937 240.023 238.249 240.023H208V209.774C208 199.087 203.843 189.056 196.218 181.431L13.594 2.296C12.032 0.78 10.003 0.018 7.976 0.018C2.253 0.018 0 5.099 0 7.995C0 10.074 0.805 12.155 2.407 13.733L184.968 192.806C189.5 197.337 192 203.368 192 209.774V256.023H238.249C244.656 256.023 250.687 258.523 255.218 263.054L344.968 352.801C349.499 357.333 351.999 363.364 351.999 369.77V416.018H398.249C404.655 416.018 410.686 418.518 415.092 422.94L498.217 509.547C499.81 511.172 501.904 512 503.998 512C509.027 512 512 507.747 512 503.978ZM176.031 379.738C168.468 372.176 158.437 368.02 147.75 368.02H112V332.271C112 321.584 107.844 311.553 99.969 303.694L13.344 226.055C11.831 224.688 9.925 224.011 8.018 224.011C3.639 224.011 0 227.509 0 232.001C0 234.199 0.897 236.385 2.657 237.961L88.969 315.303C93.5 319.834 96 325.865 96 332.271V384.019H147.75C154.156 384.019 160.187 386.519 164.5 390.832L274.124 509.438C275.687 511.141 277.843 512 279.999 512C284.42 512 288.005 508.43 288.005 504.006C288.005 502.059 287.299 500.107 285.874 498.563L176.031 379.738Z " />
        </Icon>
    </>
}