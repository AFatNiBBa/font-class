
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=duotone arrow-up-long}
 * @preview ![arrow-up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAxMDkuMjVWNDgwQzE5MiA0OTcuNjg4IDE3Ny42ODggNTEyIDE2MCA1MTJTMTI4IDQ5Ny42ODggMTI4IDQ4MFYxMDkuMjVMMTYwIDc3LjI1TDE5MiAxMDkuMjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4Ny44ODQgMTkyQzI3OS42OTcgMTkyIDI3MS41MDkgMTg4Ljg3NSAyNjUuMjU5IDE4Mi42MjVMMTU5Ljg4NCA3Ny4yNUw1NC41MDkgMTgyLjYyNUM0Mi4wMDkgMTk1LjEyNSAyMS43NTkgMTk1LjEyNSA5LjI1OSAxODIuNjI1Uy0zLjI0MSAxNDkuODc1IDkuMjU5IDEzNy4zNzVMMTM3LjI1OSA5LjM3NUMxNDkuNzU5IC0zLjEyNSAxNzAuMDA5IC0zLjEyNSAxODIuNTA5IDkuMzc1TDMxMC41MDkgMTM3LjM3NUMzMjMuMDA5IDE0OS44NzUgMzIzLjAwOSAxNzAuMTI1IDMxMC41MDkgMTgyLjYyNUMzMDQuMjU5IDE4OC44NzUgMjk2LjA3MiAxOTIgMjg3Ljg4NCAxOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M192 109.25V480C192 497.688 177.688 512 160 512S128 497.688 128 480V109.25L160 77.25L192 109.25Z" />
            <path d="M287.884 192C279.697 192 271.509 188.875 265.259 182.625L159.884 77.25L54.509 182.625C42.009 195.125 21.759 195.125 9.259 182.625S-3.241 149.875 9.259 137.375L137.259 9.375C149.759 -3.125 170.009 -3.125 182.509 9.375L310.509 137.375C323.009 149.875 323.009 170.125 310.509 182.625C304.259 188.875 296.072 192 287.884 192Z" />
        </Icon>
    </>
}