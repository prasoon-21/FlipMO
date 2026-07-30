import { LightningElement, wire, track } from 'lwc';
import getCategories from '@salesforce/apex/FlipMOController.getCategories';
import getTrendingProducts from '@salesforce/apex/FlipMOController.getTrendingProducts';
import getAIRecommendations from '@salesforce/apex/FlipMOController.getAIRecommendations';

export default class FlipMOHome extends LightningElement {
    get skeletonList() { return [1,2,3,4,5]; }
    @track categories = [];
    @track trendingProducts = [];
    @track aiRecommendations = [];

    @wire(getCategories)
    wiredCategories({ data }) { if (data) this.categories = data; }

    @wire(getTrendingProducts)
    wiredTrending({ data }) { if (data) this.trendingProducts = data; }
    
    @wire(getAIRecommendations)
    wiredAI({ data }) { if (data) this.aiRecommendations = data; }

    handleCategoryClick(event) {
        const catId = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'list', categoryId: catId } }));
    }

    handleProductClick(event) {
        this.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'detail', productId: event.detail.productId } }));
    }

    viewAll() { this.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'list' } })); }
}