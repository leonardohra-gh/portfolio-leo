import flag_us from '/public/flag-us.png'
import flag_br from '/public/flag-br.png'
import flag_es from '/public/flag-es.png'

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'pt', 'es']
export const langFlags = [flag_us, flag_br, flag_es]
export const defaultNS = 'translation'

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS)
{
    return {
        // debug: true
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}