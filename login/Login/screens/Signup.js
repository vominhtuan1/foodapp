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
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    

} from './../components/styles';

const  {brand, darkLight} = Colors;
const Signup = () =>{
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
            
                <PageTitle> Food App</PageTitle>
                <Subtitle>Đăng Ký</Subtitle>

                <Formik
                    initialValues = {{name: '', email: '', password: '', confirmpassword: '', phonenumber: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        
                        
                    }}
                >{({handleChange,handleBlur,handleSubmit, values}) =>(
                    <StyledFormArea>
                        <MyTextInput 
                            label = "Tên đăng nhập"
                            icon="user"
                            placeholder="Tài khoản đăng nhập"
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
                        <MyTextInput 
                            label = "Xác nhận mật khẩu"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText = {handleChange('confirmpassword')}
                            onBlur = {handleBlur('confirmpassword')}
                            value = {values.confirmpassword}
                            secureTextEntry = {hidePassword}
                            isPassword ={true}
                            hidePassword = {hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MyTextInput 
                            label = "Số điện thoại"
                            icon="phone"
                            placeholder="Số điện thoại liên lạc"
                            placeholderTextColor={darkLight}
                            onChangeText = {handleChange('phonenumber')}
                            onBlur = {handleBlur('phonenumber')}
                            value = {values.phonenumber}

                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Đăng ký
                            </ButtonText>
                        </StyledButton>
                       <Line />
                       <ExtraView>
                           <ExtraText>Bạn đã có tài khoản ? </ExtraText>
                       <TextLink  >
                           <TextLinkContent>Đăng nhập</TextLinkContent>
                       </TextLink>
                       </ExtraView>

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
export default Signup;