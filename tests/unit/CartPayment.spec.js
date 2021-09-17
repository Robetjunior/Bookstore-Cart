/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import CartSummaryPaymentCard from '../../src/components/cart/CartSummaryPaymentCard';

describe('Não aceita valor menor do que zero', () => {
  const wrapper = mount(CartSummaryPaymentCard);
  const vm = wrapper.vm;

  test('Testando a soma', () => {
    vm.append(5);
    vm.sum();
    vm.append(15);
    vm.equal();

    expect(vm.calculator.current).toBe(20);
  });
});
