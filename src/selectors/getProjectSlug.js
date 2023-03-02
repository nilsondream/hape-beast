import { dataHape } from 'assets/data'

export const getProjectSlug = (slug = '') => {
    return dataHape.find(DataHape => DataHape.slug === slug);
}