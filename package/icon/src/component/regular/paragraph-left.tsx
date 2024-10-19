
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `paragraph-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph-left?s=regular paragraph-left}
 * @preview ![paragraph-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDMuOTc3IDIyNEgxNzUuOTY5TDE3NiAyOTZDMTc2IDMwOS4yNTQgMTg2Ljc0NiAzMjAgMjAwIDMyMFMyMjQgMzA5LjI1NCAyMjQgMjk2VjQ4SDI1NlYyOTZDMjU2IDMwOS4yNTQgMjY2Ljc0NiAzMjAgMjgwIDMyMFMzMDQgMzA5LjI1NCAzMDQgMjk2VjQ4SDMyOEMzNDEuMjU0IDQ4IDM1MiAzNy4yNTQgMzUyIDI0QzM1MiAxMC43NDQgMzQxLjI1NCAwIDMyOCAwSDE0My45NzdDNzkuOTkgMCAzMiA0OCAzMiAxMTJTNzkuOTkgMjI0IDE0My45NzcgMjI0Wk0xNDMuOTc3IDQ4SDE3NS45NjlWMTc2SDE0My45NzdDMTA2LjM1OSAxNzYgNzkuOTkgMTQ5LjYyNSA3OS45OSAxMTJTMTA2LjM1OSA0OCAxNDMuOTc3IDQ4Wk0zNjAgMzkySDg2LjU0N0wxMjAuMDYyIDM2MS44NDRDMTI5LjkwNiAzNTIuOTY5IDEzMC43MTkgMzM3LjgxMiAxMjEuODQ0IDMyNy45MzhDMTEyLjkzOCAzMTguMDk0IDk3Ljc4MSAzMTcuMjgxIDg3LjkzOCAzMjYuMTU2TDcuOTM4IDM5OC4xNTZDMi44NzUgNDAyLjcxOSAwIDQwOS4xODggMCA0MTZTMi44NzUgNDI5LjI4MSA3LjkzOCA0MzMuODQ0TDg3LjkzOCA1MDUuODQ0QzkyLjUzMSA1MDkuOTY5IDk4LjI4MSA1MTIgMTA0IDUxMkMxMTAuNTYyIDUxMiAxMTcuMDk0IDUwOS4zMTIgMTIxLjg0NCA1MDQuMDYyQzEzMC43MTkgNDk0LjE4NyAxMjkuOTA2IDQ3OS4wMzEgMTIwLjA2MiA0NzAuMTU2TDg2LjU0NyA0NDBIMzYwQzM3My4yNSA0NDAgMzg0IDQyOS4yNSAzODQgNDE2UzM3My4yNSAzOTIgMzYwIDM5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ParagraphLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M143.977 224H175.969L176 296C176 309.254 186.746 320 200 320S224 309.254 224 296V48H256V296C256 309.254 266.746 320 280 320S304 309.254 304 296V48H328C341.254 48 352 37.254 352 24C352 10.744 341.254 0 328 0H143.977C79.99 0 32 48 32 112S79.99 224 143.977 224ZM143.977 48H175.969V176H143.977C106.359 176 79.99 149.625 79.99 112S106.359 48 143.977 48ZM360 392H86.547L120.062 361.844C129.906 352.969 130.719 337.812 121.844 327.938C112.938 318.094 97.781 317.281 87.938 326.156L7.938 398.156C2.875 402.719 0 409.188 0 416S2.875 429.281 7.938 433.844L87.938 505.844C92.531 509.969 98.281 512 104 512C110.562 512 117.094 509.312 121.844 504.062C130.719 494.187 129.906 479.031 120.062 470.156L86.547 440H360C373.25 440 384 429.25 384 416S373.25 392 360 392Z" />
        </Icon>
    </>
}