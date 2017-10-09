### react.js ��react�ĺ��Ŀ⣻react-dom.js���ṩ��DOM��صĹ�����window������reactDOM���ԣ�babel.js��JSX�﷨תΪjs�﷨
### ����script��ǩ����babel.jsʱ�� ��Ҫtype=text/babel
### ReactDOM.render ��react����������� ���ڽ���ǩģ��תΪHTML����,������ָ����DOM�ڵ�
### JSX�﷨{}js,<>html,styleΪcss;ע����ʽ����className ������class��Ϊ��js�ؼ���
### ������:�е������� �����ü��ж������ܿ����ڲ�ͬ���� ��ά����ֻ�����Լ����߼�
1. �����ĵ�һ����ĸ��д ����ֻ�ܰ���һ�������ǩ
2. ���������`var Message(�������)=React.createClass({render:function(){return }});ReactDOM.render(<Message/>,Ҫ�����DOM�ڵ�λ��)`
3. ���������: propTypes:{} ���崫�����Ե����ƺ�����;getDefaultProps:function(){} ����Ĭ������; this.props����ȡ������
* this.props.children��ʾ����������ӽڵ㣬React.Children.map���߷��� ʵ������ӳ��
4. state״̬: getInitialState�����ʼ״̬
* �����¼� �������¼� onKeyDown onKeyPress onKeyUp �����¼� onFocus onBlur �����¼� onChange onInput onSubmit ����¼� onClick onDoubleClick onMouseDown onMouseEnter onMouseLeave
5. ��Ԫ��˫�����ݰ� `ע��: �������Ԫ��������value���ԣ������ָ��onChange�¼������������� ���ֶλ���ֻ��״̬`
6. �������
### �����������
1. ��Ⱦǰ
* getDefaultProps ����ഴ����ʱ�����һ��ֵΪthis.props�ĳ�ʼֵ
* getInitialState �������(����:���ص�DOM֮ǰ)֮ǰ����һ�� ֵΪthis.state�ĳ�ʼֵ
* componentWillMount ���״���Ⱦ֮ǰ����(��Ⱦ:�����render����ִ��֮ǰ)
2. ��Ⱦ
* render �����õ�ʱ�����this.props��this.state����һ�����
3. ��Ⱦ��
* componentDidMount �ڳ�ʼ����Ⱦִ��֮�����̵���
#### ���϶�����Ⱦ��ɺ󶼻�ִ��
* shouldComponentUpdate �ڽ����µ�props����state,��Ҫ��Ⱦ֮ǰ����,����false�򲻸������
* componentWillUpdate ��һЩ����֮ǰ��׼������
* componentDidUpdate ����֮�󴥷�
* componentWillReceiveProps ��������յ��µ�props��ʱ�����
4. �Ƴ�
* componentWillUnmount �������DOM���Ƴ���ʱ����������
* componentDidUnmount ������Ƴ�֮�����
#### ReactDOM.unmountComponentAtNode(document.getElementById('app'))
### �������ref="xxx" �ڸ������ͨ��this.refs.xxx��ȡ��DOMԪ��
### mixin `����������ȡ����,�ò�ͬ�������ͬһ�����߼���ʵ�ִ������� �������������״̬���ǹ��õ� ���Կ��Ƹ��Ե�` ��������ʽ����`mixins:[commonMix]`