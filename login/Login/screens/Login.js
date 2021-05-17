import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {Formik} from 'formik';
import { Entypo } from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    LeftIcon,   
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    TextLink,
    TextLinkContent

} from './../components/styles';

const  {brand, darkLight} = Colors;
const Login = () =>{
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source = {require('./../assets/logo1.png')} />
                <PageTitle> Food App</PageTitle>
                <Subtitle>Đăng nhập</Subtitle>

                <Formik
                    initialValues = {{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        
                        
                    }}
                >{({handleChange,handleBlur,handleSubmit, values}) =>(
                    <StyledFormArea>
                        <MyTextInput 
                            label = "Tên đăng nhập"
                            icon="user"
                            placeholder="tài khoản đăng nhập"
                            placeholderTextColor={darkLight}
                            onChangeText = {handleChange('email')}
                            onBlur = {handleBlur('email')}
                            value = {values.email}

                        />

                        <MyTextInput 
                            label = "Mật khẩu"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText = {handleChange('password')}
                            onBlur = {handleBlur('password')}
                            value = {values.password}
                            secureTextEntry = {hidePassword}
                            isPassword ={true}
                            hidePassword = {hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Đăng nhập
                            </ButtonText>
                        </StyledButton>
                       
                       <StyledButton onPress={handleSubmit}>
                            <ButtonText >
                                Đăng Ký
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <TextLink >
                            <TextLinkContent>Quên mật khẩu ?</TextLinkContent>
                        </TextLink>
                    </StyledFormArea>
                )}

                </Formik>   
            </InnerContainer>
        </StyledContainer>
    );
}


const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Entypo name={icon} size={24} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />  
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Entypo name={hidePassword ? "eye-with-line" : "eye" } size={24} color={darkLight} />
                </RightIcon>
            )}
        </View>

            
    )

}
export default Login;